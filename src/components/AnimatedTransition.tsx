"use client"

import type React from "react"
import { useRef, useEffect } from "react"
import { Animated, type ViewStyle, type AccessibilityProps } from "react-native"

interface AnimatedTransitionProps extends AccessibilityProps {
  children: React.ReactNode
  style?: ViewStyle
}

const AnimatedTransition: React.FC<AnimatedTransitionProps> = ({ children, style, ...accessibilityProps }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start()
  }, [fadeAnim])

  return (
    <Animated.View
      style={{
        ...style,
        opacity: fadeAnim,
        transform: [
          {
            translateY: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [50, 0],
            }),
          },
        ],
      }}
      {...accessibilityProps}
    >
      {children}
    </Animated.View>
  )
}

export default AnimatedTransition

