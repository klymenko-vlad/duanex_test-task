import {Tree} from 'react-arborist';
import {rawData} from '../mockData/rawData.ts';
import {treeDataTransform} from "./treeDataTransform.ts";
import {TreeNode} from "./TreeNode.tsx";
import type {TreeTransformedData} from "../../types/TreeTransformedData.ts";

export default function FileTree() {
    const treeData: TreeTransformedData[] = treeDataTransform(rawData);

    return (
        <div>
            <Tree<TreeTransformedData>
                initialData={treeData}
                openByDefault={true}
                children={TreeNode}
            />
        </div>
    );
}
