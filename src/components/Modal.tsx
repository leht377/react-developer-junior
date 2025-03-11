import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    if (isOpen) window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className='fixed inset-0 flex items-center justify-center bg-black/55 z-50'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className='bg-white rounded-lg shadow-lg w-[90%] max-w-7xl p-5 relative'
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className='absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer'
              onClick={onClose}
            >
              ✖
            </button>

            {title && <h2 className='text-lg font-semibold mb-4'>{title}</h2>}

            <div className=' max-h-[450px] overflow-y-auto'>{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal
