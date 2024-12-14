'use client'
import React, { useContext, useRef, PropsWithChildren } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { usePathname } from 'next/navigation'
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime'
function FrozenRouter(props: PropsWithChildren<{}>) {
  const context = useContext(LayoutRouterContext)
  const frozen = useRef(context).current

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {props.children}
    </LayoutRouterContext.Provider>
  )
}

export default function Layout(props: PropsWithChildren<{}>) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode='wait'>
      <motion.div key={pathname}>
        <FrozenRouter>{props.children}</FrozenRouter>
      </motion.div>
    </AnimatePresence>
  )
}
