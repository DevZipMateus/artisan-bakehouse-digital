interface SectionDividerProps {
  color?: string;
  flip?: boolean;
  showDepthEffect?: boolean;
  className?: string;
}

const SectionDivider = ({ 
  color = "#ECE8E0", 
  flip = false,
  showDepthEffect = true,
  className = ""
}: SectionDividerProps) => {
  const svgPath = `M1920 300v-4.067c-455.162 0-690.876-51.203-1082.65-129.288C490.044 97.423 0 100.013 0 100.013V300h1920z`;
  
  return (
    <div className={`relative w-full leading-[0] block ${flip ? 'rotate-180' : ''} ${className}`}>
      {/* Main SVG Layer */}
      <svg 
        preserveAspectRatio='none' 
        viewBox='0 100 1920 200' 
        height='100%' 
        width='100%' 
        xmlns='http://www.w3.org/2000/svg'
        className="w-full h-auto block relative"
      >
        <path d={svgPath} fill={color} />
      </svg>
      
      {showDepthEffect && (
        <>
          {/* Middle Layer - 60% opacity */}
          <svg 
            preserveAspectRatio='none' 
            viewBox='0 100 1920 200' 
            height='100%' 
            width='100%' 
            xmlns='http://www.w3.org/2000/svg'
            className="w-full h-auto block absolute top-0 left-0 opacity-60 translate-y-4"
            aria-hidden="true"
          >
            <path d={svgPath} fill={color} />
          </svg>
          
          {/* Background Layer - 30% opacity */}
          <svg 
            preserveAspectRatio='none' 
            viewBox='0 100 1920 200' 
            height='100%' 
            width='100%' 
            xmlns='http://www.w3.org/2000/svg'
            className="w-full h-auto block absolute top-0 left-0 opacity-30 translate-y-8"
            aria-hidden="true"
          >
            <path d={svgPath} fill={color} />
          </svg>
        </>
      )}
    </div>
  );
};

export default SectionDivider;
