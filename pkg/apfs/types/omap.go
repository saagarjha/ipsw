package types

import (
	"bytes"
	"encoding/binary"
	"fmt"
	"io"
	"math"
)

type omapValFlag uint32
type omapSnapshotFlag uint32
type omapFlag uint32

const (
	/** Object Map Value Flags **/
	OMAP_VAL_DELETED           omapValFlag = 0x00000001
	OMAP_VAL_SAVED             omapValFlag = 0x00000002
	OMAP_VAL_ENCRYPTED         omapValFlag = 0x00000004
	OMAP_VAL_NOHEADER          omapValFlag = 0x00000008
	OMAP_VAL_CRYPTO_GENERATION omapValFlag = 0x00000010

	/** Snapshot Flags **/
	OMAP_SNAPSHOT_DELETED  omapSnapshotFlag = 0x00000001
	OMAP_SNAPSHOT_REVERTED omapSnapshotFlag = 0x00000002

	/** Object Map Flags **/
	OMAP_MANUALLY_MANAGED  omapFlag = 0x00000001
	OMAP_ENCRYPTING        omapFlag = 0x00000002
	OMAP_DECRYPTING        omapFlag = 0x00000004
	OMAP_KEYROLLING        omapFlag = 0x00000008
	OMAP_CRYPTO_GENERATION omapFlag = 0x00000010

	OMAP_VALID_FLAGS = 0x0000001f

	/** Object Map Constants **/
	OMAP_MAX_SNAP_COUNT = math.MaxUint32

	/** Object Map Reaper Phases **/
	OMAP_REAP_PHASE_MAP_TREE      = 1
	OMAP_REAP_PHASE_SNAPSHOT_TREE = 2
)

// OMapPhysT is a omap_phys_t struct
type OMapPhysT struct {
	Obj              ObjPhysT
	Flags            omapFlag
	SnapCount        uint32
	TreeType         objType
	SnapshotTreeType objType
	TreeOid          OidT
	SnapshotTreeOid  OidT
	MostRecentSnap   XidT
	PendingRevertMin XidT
	PendingRevertMax XidT
}

type OMap struct {
	OMapPhysT
	Tree *BTreeNodePhys

	block
}

// OMapKey is a omap_key_t struct
type OMapKey struct {
	Oid OidT
	Xid XidT
}

// OMapVal is a omap_val_t struct
type OMapVal struct {
	Flags omapValFlag
	Size  uint32
	Paddr uint64
}

// OMapSnapshotT is a omap_snapshot_t
type OMapSnapshotT struct {
	Flags omapSnapshotFlag
	Pad   uint32
	Oid   OidT
}

type OMapNodeEntry struct {
	Offset KVOffT
	Key    OMapKey
	PAddr  uint64
	OMap   *Obj
	Val    OMapVal
}

// ReadOMap returns a verified omap or error if block does not verify
func ReadOMap(r *io.SectionReader, blockAddr uint64) (*OMap, error) {

	var err error

	o := &OMap{
		block: block{
			Addr: blockAddr,
			Size: NX_DEFAULT_BLOCK_SIZE,
			Data: make([]byte, NX_DEFAULT_BLOCK_SIZE),
		},
	}

	r.Seek(int64(blockAddr*NX_DEFAULT_BLOCK_SIZE), io.SeekStart)

	if err := binary.Read(r, binary.LittleEndian, &o.Data); err != nil {
		return nil, fmt.Errorf("failed to read %#x sized block data: %v", NX_DEFAULT_BLOCK_SIZE, err)
	}

	if !VerifyChecksum(o.Data) {
		return nil, fmt.Errorf("nx_superblock_t data block failed checksum validation")
	}

	o.r = bytes.NewReader(o.Data)

	if err := binary.Read(o.r, binary.LittleEndian, &o.OMapPhysT); err != nil {
		return nil, fmt.Errorf("failed to read omap_phys_t: %v", err)
	}

	if o.TreeOid > 0 {
		o.Tree, err = ReadBTreeNode(r, uint64(o.TreeOid))
		if err != nil {
			return nil, fmt.Errorf("failed to read root node of the container object map B-tree at block %#x: %v", o.TreeOid, err)
		}
	}

	if o.SnapshotTreeOid > 0 {
		panic("SnapshotTreeOid parsing is not implimented yet")
	}

	return o, nil
}