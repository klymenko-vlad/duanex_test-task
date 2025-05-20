import {Tree} from 'react-arborist';
import {getRawData} from '../mockData/rawData.ts';
import {treeDataTransform} from "./treeDataTransform.ts";
import {TreeNode} from "./TreeNode.tsx";
import type {TreeTransformedData} from "../../types/TreeTransformedData.ts";
import {useState, useEffect} from "react";

export default function FileTree() {
    const [treeData, setTreeData] = useState<TreeTransformedData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getRawData().then((data) => {
            setTreeData(treeDataTransform(data));
            setLoading(false);
        });
    }, []);

    if (loading) return <div>Loading...</div>;
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
