//% color="#4285F4" icon="\uf278" weight=100
namespace googleMaps {
    let currentX = 80;
    let currentY = 60;

    /**
     * Set the current map location
     */
    //% block="set map location x $x y $y"
    //% x.min=0 x.max=160 y.min=0 y.max=120
    export function setMapLocation(x: number, y: number) {
        currentX = x;
        currentY = y;
    }

    /**
     * Move the player relative to map
     */
    //% block="move map by deltaX $dx deltaY $dy"
    export function moveMap(dx: number, dy: number) {
        currentX += dx;
        currentY += dy;
    }

    /**
     * Get the current X coordinate
     */
    //% block="current map X"
    export function getMapX(): number {
        return currentX;
    }

    /**
     * Get the current Y coordinate
     */
    //% block="current map Y"
    export function getMapY(): number {
        return currentY;
    }
}
