// components/layout-with-sidebar.tsx
'use client'

import { usePathname } from 'next/navigation'
import Sidebar from '@/components/sidebar'

export default function LayoutWithSidebar({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const showSidebar = pathname !== '/'

  return (
    <div className="w-full flex-grow flex justify-center">
      <div className="max-w-[1600px] w-full px-4">
        <div className="flex pt-10 overflow-hidden">
            <div className="flex-1 mmin-w-0 overflow-x-hidden">
              {children}
            </div>
            {showSidebar && (
              <aside className="w-80 flex-shrink-0 ml-6 mr-4">
                <div className="sticky top-4"> {/* 使侧边栏固定 */}
                  <Sidebar />
                </div>
              </aside>
            )}
        </div>
      </div>
    </div>
  )
}
