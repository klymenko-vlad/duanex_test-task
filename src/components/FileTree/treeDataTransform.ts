import type { FileItem } from "../mockData/rawData.ts";
import type {TreeTransformedData} from "../../types/TreeTransformedData.ts";

export function treeDataTransform(data: FileItem[]): TreeTransformedData[] {
    return data.map((item: FileItem): TreeTransformedData => {
        const isFolder = !!item.subitems;
        const hasFolders = item.subitems?.some(i => i.subitems);
        const iconType = !isFolder
            ? 'file'
            : hasFolders
                ? 'folder-nested'
                : 'folder-empty';

        return {
            id: item.name,
            name: item.name,
            iconType,
            children: item.subitems ? treeDataTransform(item.subitems) : undefined,
            rawChildren: item.subitems || []
        };
    });
}
