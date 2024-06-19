export default function Flex(props: React.HTMLProps<HTMLDivElement> & { direction?: 'row' | 'col' | 'auto', autoSize?: 'sm' | 'xs' | 'md' | 'lg' | 'xl' }) {
    const { direction = 'row', autoSize = 'md', ...rest } = props
    return (
        <div {...rest} className={`flex ${direction === 'row' ? 'flex-row' : direction === 'col' ? 'flex-col' : `flex-col ${autoSize}:flex-row`} ${props.className}`}>
        </div>
    );
}