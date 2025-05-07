import { LIMIT_LISTS } from "@/constants/list.constants";
import { cn } from "@/utils/cn";
import { Button, Input, Pagination, Select, SelectItem, Spinner, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { em } from "framer-motion/client";
import { ChangeEvent, Key, ReactNode, useMemo } from "react";
import { CiSearch } from "react-icons/ci";

interface PropTypes {
    columns: Record<string, unknown>[];
    data: Record<string, unknown>[];
    renderCell: (item: Record<string, unknown>, columnKey: Key) => ReactNode;
    onClearSearch: () => void;
    onChangeSearch: (e: ChangeEvent<HTMLInputElement>) => void;
    buttonTopContentLabel?: string;
    onClickButtonTopContent?: () => void;
    limit: string;
    currentPage: number;
    onChangeLimit: (e: ChangeEvent<HTMLSelectElement>) => void;
    onChangePage: (page: number) => void;
    totalPages: number;
    emptyContent: string;
    isLoading?: boolean;
}

const DataTable = (props: PropTypes) => {
    const {columns, data, renderCell, onClearSearch, onChangeSearch, buttonTopContentLabel, onClickButtonTopContent, limit, onChangeLimit, currentPage, totalPages, onChangePage, emptyContent, isLoading} = props;

    const TopContent = useMemo(() => {
        return (
            <div className="flex lg:flex-row flex-col-reverse items-start justify-between gap-y-4 lg:items-center">
                <Input isClearable className="w-full sm:max-w-[24%]" placeholder="Search by name" startContent={<CiSearch/>} onClear={onClearSearch} onChange={onChangeSearch}/>
                {buttonTopContentLabel && (
                    <Button color="primary" onPress={onClickButtonTopContent}>
                        {buttonTopContentLabel}
                    </Button>
                )}
            </div>
        )
    }, [buttonTopContentLabel, onClearSearch, onChangeSearch, onClickButtonTopContent]);

    const BottomContent = useMemo(() => {
        return (
            <div className="flex items-center justify-center px-2 py-2 lg:justify-between">
                <Select 
                className="hidden max-w-36 lg:block" 
                size="sm" 
                selectedKeys={[limit]} 
                selectionMode="single" 
                onChange={onChangeLimit} 
                startContent={<p className="text-small">Show:</p>}
                >
                    {LIMIT_LISTS.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                            {item.label}
                        </SelectItem>
                    ))}
                </Select>
                <Pagination isCompact showControls color="primary" page={currentPage} total={totalPages} onChange={onChangePage}/>
            </div>
        )
    },[limit, currentPage, totalPages, onChangePage, onChangeLimit]);

    return (
        <Table topContent={TopContent} topContentPlacement="inside" bottomContent={BottomContent} bottomContentPlacement="inside" classNames={{
            base: "max-w-full",
            wrapper: cn({"overflow-x-hidden": isLoading})
        }}>
            <TableHeader columns={columns}>
                {(column) => (
                    <TableColumn key={column.uid as Key}>
                        {column.name as string} 
                    </TableColumn>
                )}
            </TableHeader>

            <TableBody items={data} emptyContent={emptyContent} isLoading={isLoading} loadingContent={
                <div className="flex h-full w-full items-center justify-center bg-foreground-700/30 backdrop-blur">
                    <Spinner color="primary"/>
                </div>}>
                {(item) => (
                    <TableRow key={item._id as Key}>
                        {(columnKey) => (
                            <TableCell>{renderCell(item, columnKey)}</TableCell>
                        )}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
};

export default DataTable;