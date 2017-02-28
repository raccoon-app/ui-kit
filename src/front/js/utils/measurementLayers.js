export default function measurementLayers(currentLayer, hoverLayer) {
    const spacing = [];

    const coord = {
      cx1: currentLayer.x,
      cx2: currentLayer.x + currentLayer.width,
      cy1: currentLayer.y,
      cy2: currentLayer.y + currentLayer.height,
      tx1: hoverLayer.x,
      tx2: hoverLayer.x + hoverLayer.width,
      ty1: hoverLayer.y,
      ty2: hoverLayer.y + hoverLayer.height,
    };

    // TOP RULER
    if (coord.ty1 > coord.cy2) {
      spacing.push({
        type: 'top',
        top: coord.cy2,
        left: (coord.tx1 + coord.tx2) / 2,
        height: (coord.ty1 - coord.cy2),
        value: (coord.ty1 - coord.cy2),
      });
    } else {
      if (coord.ty1 < coord.cy2) {
        if (coord.ty1 > coord.cy1) {
          spacing.push({
            type: 'top',
            top: coord.cy1,
            left: (coord.tx1 + coord.tx2) / 2,
            height: (coord.ty1 - coord.cy1),
            value: (coord.ty1 - coord.cy1),
          });
        }

        if (coord.ty1 < coord.cy1 && coord.ty2 > coord.cy1) {
          spacing.push({
            type: 'top',
            top: coord.ty1,
            left: (coord.cx1 + coord.cx2) / 2,
            height: (coord.cy1 - coord.ty1),
            value: (coord.cy1 - coord.ty1),
          });
        }
      }
    }

    // BOTTOM RULER
    if (coord.cy1 > coord.ty2) {
      spacing.push({
        type: 'bottom',
        top: coord.ty2,
        left: (coord.tx1 + coord.tx2) / 2,
        height: (coord.cy1 - coord.ty2),
        value: (coord.cy1 - coord.ty2),
      });
    } else {
      if (coord.cy1 < coord.ty2) {
        if (coord.cy2 > coord.ty2) {
          spacing.push({
            type: 'bottom',
            top: coord.ty2,
            left: (coord.tx1 + coord.tx2) / 2,
            height: (coord.cy2 - coord.ty2),
            value: (coord.cy2 - coord.ty2),
          });
        }

        if (coord.cy2 < coord.ty2 && coord.ty1 < coord.cy2) {
          spacing.push({
            type: 'bottom',
            top: coord.cy2,
            left: (coord.cx1 + coord.cx2) / 2,
            height: (coord.ty2 - coord.cy2),
            value: (coord.ty2 - coord.cy2),
          });
        }
      }
    }

    // LEFT RULER
    if (coord.tx1 > coord.cx2) {
      spacing.push({
        type: 'left',
        top: (coord.ty1 + coord.ty2) / 2,
        left: coord.cx2,
        width: (coord.tx1 - coord.cx2),
        value: (coord.tx1 - coord.cx2),
      });
    } else {
      if (coord.tx1 < coord.cx2) {
        if (coord.tx1 > coord.cx1) {
          spacing.push({
            type: 'left',
            top: (coord.ty1 + coord.ty2) / 2,
            left: coord.cx1,
            width: (coord.tx1 - coord.cx1),
            value: (coord.tx1 - coord.cx1),
          });
        }

        if (coord.tx1 < coord.cx1 && coord.tx2 > coord.cx1) {
          spacing.push({
            type: 'left',
            top: (coord.cy1 + coord.cy2) / 2,
            left: coord.tx1,
            width: (coord.cx1 - coord.tx1),
            value: (coord.cx1 - coord.tx1),
          });
        }
      }
    }

    // RIGHT RULER
    if (coord.cx1 > coord.tx2) {
      spacing.push({
        type: 'right',
        top: (coord.ty1 + coord.ty2) / 2,
        left: coord.tx2,
        width: (coord.cx1 - coord.tx2),
        value: (coord.cx1 - coord.tx2),
      });
    } else {
      if (coord.cx1 < coord.tx2) {
        if (coord.cx2 > coord.tx2) {
          spacing.push({
            type: 'right',
            top: (coord.ty1 + coord.ty2) / 2,
            left: coord.tx2,
            width: (coord.cx2 - coord.tx2),
            value: (coord.cx2 - coord.tx2),
          });
        }

        if (coord.cx2 < coord.tx2 && coord.tx1 < coord.cx2) {
          spacing.push({
            type: 'right',
            top: (coord.cy1 + coord.cy2) / 2,
            left: coord.cx2,
            width: (coord.tx2 - coord.cx2),
            value: (coord.tx2 - coord.cx2),
          });
        }
      }
    }

    return spacing;
}

