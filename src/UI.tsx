import * as React from 'react'
import { SideCarComponent } from 'use-sidecar'

import { RemoveScroll } from 'react-remove-scroll/UI'
import ReactFocusLock from 'react-focus-lock/UI'

import { EffectProps, ReactFocusOnSideProps, LockProps } from './types'
import { effectCar } from './medium'

export function FocusOn(props: ReactFocusOnSideProps) {
	const [lockProps, setLockProps] = React.useState<LockProps>(false as any)

	const { children, autoFocus, shards, enabled = true, scrollLock = true, focusLock = true, returnFocus = true, inert, sideCar, className, ...rest } = props

	const SideCar: SideCarComponent<EffectProps> = sideCar

	const { onActivation, onDeactivation, ...restProps } = lockProps

	return (
		<>
			<RemoveScroll sideCar={sideCar} className={className} enabled={enabled && scrollLock} shards={shards} inert={inert}>
				{enabled && <SideCar {...rest} sideCar={effectCar} setLockProps={setLockProps} shards={shards} />}
				<ReactFocusLock
					sideCar={sideCar}
					disabled={!(lockProps && enabled && focusLock)}
					returnFocus={returnFocus}
					autoFocus={autoFocus}
					shards={shards}
					lockProps={restProps}
					onActivation={onActivation}
					onDeactivation={onDeactivation}
				>
					{children}
				</ReactFocusLock>
			</RemoveScroll>
		</>
	)
}

export * from './reExports'
