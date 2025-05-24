// VehicleShowcase.tsx
"use client";
import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import { useAppStore, type VehiclePart } from "@/store";
import Image from "next/image";

const VehicleShowcase = () => {
  const { 
    vehicleType, 
    activePart, 
    isPaused, 
    progress, 
    toggleVehicleType, 
    setActivePart, 
    togglePause, 
    setProgress 
  } = useAppStore();
  
  const isPassenger = vehicleType === 'passenger';
  const ref = useRef(null);
  const passengerVideoRef = useRef<HTMLVideoElement>(null);
  const commercialVideoRef = useRef<HTMLVideoElement>(null);
  useInView(ref, { once: true });

  const handleToggle = () => {
    toggleVehicleType();
  };

  const handlePartClick = (part: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event bubbling to parent (which would toggle vehicle type)
    setActivePart(part as VehiclePart);
  };

  const togglePlayPause = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event bubbling to parent (which would toggle vehicle type)
    togglePause();
    
    const videoRef = isPassenger ? passengerVideoRef.current : commercialVideoRef.current;
    if (videoRef) {
      if (isPaused) {
        videoRef.play();
      } else {
        videoRef.pause();
      }
    }
  };

  // Update progress when video is playing
  useEffect(() => {
    const videoRef = isPassenger ? passengerVideoRef.current : commercialVideoRef.current;
    if (!videoRef) return;

    const updateProgress = () => {
      if (videoRef.duration) {
        const currentProgress = (videoRef.currentTime / videoRef.duration) * 100;
        setProgress(currentProgress);
      }
    };

    videoRef.addEventListener('timeupdate', updateProgress);
    return () => {
      videoRef.removeEventListener('timeupdate', updateProgress);
    };
  }, [isPassenger, activePart, setProgress]);

  // Pause/play videos when isPaused state changes
  useEffect(() => {
    const videoRef = isPassenger ? passengerVideoRef.current : commercialVideoRef.current;
    if (!videoRef) return;

    if (isPaused) {
      videoRef.pause();
    } else {
      videoRef.play();
    }
  }, [isPaused, isPassenger]);

  // Map part names to video files
  const getVideoSource = () => {
    if (!isPassenger) return "/assets/CommercialAlpha.mp4";
    
    switch (activePart) {
      case "Complete Body":
        return "/assets/PassengerAlpha_Trim.mp4";
      case "Front":
        return "/assets/Front.mp4";
      case "Cabin":
        return "/assets/Cabin.mp4";
      case "Trunk":
        return "/assets/Trunk.mp4";
      case "Exterior":
        return "/assets/Exterior.mp4";
      default:
        return "/assets/PassengerAlpha_Trim.mp4";
    }
  };

  // Get icon source based on part name and active state
  const getIconSource = (part: string) => {
    const partNameMap: Record<string, string> = {
      "Complete Body": "body",
      "Front": "front",
      "Cabin": "trunk",
      "Trunk": "trunk",
      "Exterior": "exterior",
    };
    
    const baseName = partNameMap[part] || "body";
    return activePart === part ? `/png/${baseName}_white.png` : `/png/${baseName}.png`;
  };

  return (
    <section
      ref={ref}
      onClick={handleToggle}
      className="w-full h-screen bg-black text-white flex flex-col relative overflow-hidden"
    >
      {/* Full-width heading - centered with more space at top */}
      <div className="w-full text-center pt-12 px-4 z-10">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-light">
          Evolving the drive with <strong className="font-bold">360-degree</strong> <br className="hidden sm:block"/>
          nonwoven solutions
        </h2>
      </div>

      {/* Content area with vehicle types on left and features on right */}
      <div className="flex-grow flex flex-col lg:flex-row px-4 sm:px-8 md:px-16 relative py-4 sm:py-8 items-center">
         {/* Left side - Vehicle Type Labels */}
        <div className="w-full lg:w-1/3 relative h-[50%] flex items-center mb-8 lg:mb-0">
          {/* Indicator line - only the height of text */}
          <div className="absolute left-4 sm:left-8 h-full w-px bg-gray-700"></div>
          
          {/* Highlight for active section - no animation */}
          <div 
            className="absolute left-4 sm:left-8 w-px bg-white"
            style={{
              top: isPassenger ? '0' : '50%',
              height: '50%',
            }}
          ></div>

          {/* Vehicle names */}
          <div className="pl-8 sm:pl-16 relative h-48 overflow-hidden flex items-center w-full">
            {/* Passenger vehicles */}
            <div 
              className="absolute w-full pl-8 sm:pl-16 flex flex-col justify-center"
              style={{
                top: isPassenger ? '0' : '-100%',
                opacity: isPassenger ? 1 : 0,
                transition: 'top 0.5s ease-out, opacity 0.5s ease-out'
              }}
            >
              <h3 className="text-lg sm:text-xl md:text-3xl font-semibold mb-1">
                Passenger vehicles
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-xs">
                Revving up Nonwoven innovation from interior to exterior.
              </p>
            </div>
            
            {/* Commercial vehicles */}
            <div 
              className="absolute w-full pl-8 sm:pl-16 flex flex-col justify-center"
              style={{
                top: isPassenger ? '100%' : '0',
                opacity: isPassenger ? 0 : 1,
                transition: 'top 0.5s ease-out, opacity 0.5s ease-out'
              }}
            >
              <h3 className="text-lg sm:text-xl md:text-3xl font-semibold mb-1">
                Commercial vehicles
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-xs">
                Advancing Nonwoven engineering for heavy-duty vehicles.
              </p>
            </div>
          </div>
        </div>

        {/* Right side - Video and Features */}
        <div className="w-full lg:w-2/3 h-full flex flex-col items-center lg:items-end justify-start relative overflow-hidden">
          {/* Video Container with transitions */}
          <div className="w-full relative h-full">
            {/* Passenger Video */}
            <div 
              className="absolute w-full"
              style={{
                top: isPassenger ? '0' : '-100%',
                opacity: isPassenger ? 1 : 0,
                transition: 'top 0.5s ease-out, opacity 0.5s ease-out'
              }}
            >
              <video
                ref={passengerVideoRef}
                src={isPassenger ? getVideoSource() : "/assets/PassengerAlpha_Trim.mp4"}
                autoPlay={!isPaused}
                loop
                muted
                playsInline
                className="w-full object-contain"
              />
            </div>

            {/* Commercial Video */}
            <div 
              className="absolute w-full"
              style={{
                top: isPassenger ? '100%' : '0',
                opacity: isPassenger ? 0 : 1,
                transition: 'top 0.5s ease-out, opacity 0.5s ease-out'
              }}
            >
              <video
                ref={commercialVideoRef}
                src="/assets/CommercialAlpha.mp4"
                autoPlay={!isPaused}
                loop
                muted
                playsInline
                className="w-full object-contain"
              />
            </div>
          </div>

          {/* Feature Section - Below video with transition */}
          <div 
            className="mb-8 flex justify-center w-full"
            style={{
              transform: isPassenger ? 'translateY(0)' : 'translateY(20px)',
              opacity: isPassenger ? 1 : 0,
              transition: 'transform 0.5s ease-out, opacity 0.5s ease-out'
            }}
          >
            {isPassenger && (
              <div className="flex flex-wrap items-center justify-center lg:justify-end gap-4 sm:gap-8">
                {["Complete Body", "Front", "Cabin", "Trunk", "Exterior"].map((part) => (
                  <div 
                    key={part} 
                    className={`flex flex-col items-center text-xs cursor-pointer ${activePart === part ? 'opacity-100' : 'opacity-70'}`}
                    onClick={(e) => handlePartClick(part, e)}
                  >
                    <div className="flex items-center justify-center">
                        <Image 
                         width="100"
                         height="100"
                          src={getIconSource(part)} 
                          alt={part} 
                          className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 object-contain" 
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.onerror = null;
                            target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSIjZmZmZmZmMjAiIHJ4PSI0Ii8+PC9zdmc+";
                          }}
                        />
                    </div>
                    <span className="mt-1 text-white text-[10px] sm:text-xs">{part}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Prototype note - Bottom middle */}
      <div className="absolute bottom-40 lg:bottom-44 xl:bottom-48 left-1/2 transform -translate-x-1/2 text-[10px] sm:text-xs text-gray-500 text-center">
        <p>Click anywhere for next slide</p>
        <p>(Only written for prototype)</p>
      </div>

      {/* Pause button with progress indicator - Bottom right */}
      <div 
        onClick={togglePlayPause}
        className="absolute bottom-10 sm:bottom-20 right-4 sm:right-16 w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/50 flex items-center justify-center cursor-pointer overflow-hidden"
      >
        {/* Circular progress indicator */}
        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle 
            cx="50" 
            cy="50" 
            r="48" 
            fill="none" 
            stroke="rgba(255,255,255,0.3)" 
            strokeWidth="2"
          />
          <circle 
            cx="50" 
            cy="50" 
            r="48" 
            fill="none" 
            stroke="white" 
            strokeWidth="2"
            strokeDasharray={`${progress * 3.02} 1000`} 
          />
        </svg>
        
        {/* Play/Pause icon */}
        <div className="w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center z-10">
          {isPaused ? (
            // Play icon
            <div className="w-0 h-0 border-t-[4px] sm:border-t-[6px] border-t-transparent border-l-[8px] sm:border-l-[10px] border-l-white border-b-[4px] sm:border-b-[6px] border-b-transparent ml-1"></div>
          ) : (
            // Pause icon
            <>
              <div className="w-[3px] sm:w-1 h-2 sm:h-3 bg-white mx-px"></div>
              <div className="w-[3px] sm:w-1 h-2 sm:h-3 bg-white mx-px"></div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default VehicleShowcase;
