interface Icon { 
    id: string;
    width: number;
    height: number;
    className?: string
    onClick?: () => void;
}

export const SpriteIcons: React.FC<Icon> = ({ id, width = 24, height = 24 , className }) => {
    return (
      <svg width={width} height={height} className={className}>
        <use href={`#${id}`} xlinkHref={`#${id}`} />
      </svg>
    );
};