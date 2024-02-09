import React, {useState} from 'react';
import {DndProvider, useDrag, useDrop} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';

const Box = ({id, color, children}) => {
    const [{isDragging}, drag] = useDrag({
        type: 'box',
        item: {id, color, text: children},
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    return (
        <div
            ref={drag}
            style={{
                backgroundColor: color,
                padding: '1rem',
                margin: '0.5rem',
                opacity: isDragging ? 0.5 : 1,
                cursor: 'move',
            }}
        >
            {children}
        </div>
    );
};

const DropZone = ({placedBoxes, setPlacedBoxes, setBoxes}) => {
    const [{canDrop, isOver}, drop] = useDrop({
        accept: 'box',
        drop: (item) => {
            setPlacedBoxes((prevPlacedBoxes) => [
                ...prevPlacedBoxes,
                {id: item.id, color: item.color, text: item.text},
            ]);

            setBoxes((prevBoxes) => prevBoxes.filter((box) => box.id !== item.id));
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    });

    const isActive = canDrop && isOver;

    return (
        <div
            ref={drop}
            style={{
                width: '300px',
                height: '300px',
                border: '2px dashed black',
                backgroundColor: isActive ? 'lightgreen' : 'white',
            }}
        >
            {placedBoxes ? placedBoxes.map((box) => (
                <Box key={box.id} color={box.color}>
                    {box.text}
                </Box>
            )) : null}
        </div>
    );
};

const Test = () => {
    const [boxes, setBoxes] = useState([
        {id: 1, text: 'Box 1', color: 'lightblue'},
        {id: 2, text: 'Box 2', color: 'lightcoral'},
        {id: 3, text: 'Box 3', color: 'lightgoldenrodyellow'},
    ]);

    const [placedBoxes, setPlacedBoxes] = useState([]);

    return (
        <DndProvider backend={HTML5Backend}>
            <div style={{
                display: 'flex',
                backgroundColor: 'lightgray',
                padding: '10px',
                minHeight: '10px'
            }}>
                {boxes.map((box) => (
                    <Box key={box.id} id={box.id} color={box.color}>
                        {box.text}
                    </Box>
                ))}
            </div>
            <DropZone placedBoxes={placedBoxes} setPlacedBoxes={setPlacedBoxes} setBoxes={setBoxes}/>
        </DndProvider>
    );
};

export default Test;
