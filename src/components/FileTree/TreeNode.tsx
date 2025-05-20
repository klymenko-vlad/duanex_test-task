import type {NodeRendererProps} from "react-arborist";
import {CustomFileIcon} from "./CustomFileIcon.tsx";
import FolderIcon from "@mui/icons-material/Folder";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";
import type {TreeTransformedData} from "../../types/TreeTransformedData.ts";

export function TreeNode({node, style, dragHandle}: NodeRendererProps<TreeTransformedData>) {
    const renderIcon = () => {
        switch (node.data.iconType) {
            case 'file':
                return <CustomFileIcon/>;
            case 'folder-empty':
                return <FolderIcon fontSize="small"/>;
            case 'folder-nested':
                return <FolderSpecialIcon fontSize="small"/>;
            default:
                return null;
        }
    };

    return (
        <div
            style={{
                ...style,
                display: 'flex',
                alignItems: 'center',
                paddingLeft: node.level * 20,
                cursor: 'pointer',
            }}
            {...dragHandle}
            onClick={() => {
                if (node.data.rawChildren?.length) {
                    alert('нащадки: ' + node.data.rawChildren.map(i => i.name).join(', '));
                }
            }}
        >
            {renderIcon()}
            <span style={{marginLeft: 6}}>{node.data.name}</span>
        </div>
    );
}