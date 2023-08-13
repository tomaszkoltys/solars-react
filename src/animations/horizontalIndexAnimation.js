export const horizontalIndexAnimation = {
    initial: {
        opacity: 0,
        x: 20,
    },
    animate: (index) => ({
        opacity: 1,
        x: 0,
        transition: {
            duration: 1, 
            delay: index * 0.2,
        }
    }),
}