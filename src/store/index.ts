import { create } from 'zustand'

type VehicleType = 'passenger' | 'commercial'
type VehiclePart = 'Complete Body' | 'Front' | 'Cabin' | 'Trunk' | 'Exterior'

interface AppState {
  // Vehicle showcase state
  vehicleType: VehicleType
  activePart: VehiclePart
  isPaused: boolean
  progress: number
  
  // Actions
  setVehicleType: (type: VehicleType) => void
  toggleVehicleType: () => void
  setActivePart: (part: VehiclePart) => void
  setIsPaused: (isPaused: boolean) => void
  togglePause: () => void
  setProgress: (progress: number) => void
}

export const useAppStore = create<AppState>((set) => ({
  // Initial state
  vehicleType: 'passenger',
  activePart: 'Complete Body',
  isPaused: false,
  progress: 0,
  
  // Actions
  setVehicleType: (type) => set({ vehicleType: type }),
  toggleVehicleType: () => set((state) => ({ 
    vehicleType: state.vehicleType === 'passenger' ? 'commercial' : 'passenger',
    activePart: 'Complete Body' // Reset to default part when switching vehicle type
  })),
  setActivePart: (part) => set({ activePart: part }),
  setIsPaused: (isPaused) => set({ isPaused }),
  togglePause: () => set((state) => ({ isPaused: !state.isPaused })),
  setProgress: (progress) => set({ progress })
}))