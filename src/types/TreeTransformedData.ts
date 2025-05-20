import type {FileItem} from "../components/mockData/rawData.ts";

export type TreeTransformedData = {
    id: string;
    name: string;
    iconType: 'file' | 'folder-empty' | 'folder-nested';
    children?: TreeTransformedData[];
    rawChildren: FileItem[];
}