export type SearchBarProps = {
    onUserInput: (value: string) => void;
    useDebouncedValue?: (value: string, delay?: number) => string;
    placeholder?: string;
    inputClassName?: string;
    searchQuery?: string;
};
