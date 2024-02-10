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
                opacity: isDragging ? 0 : 1,
                cursor: 'move',
            }}
        >
            {children}
        </div>
    );
};

const DropZone = ({boxes, num, setBoxes}) => {
    const [{canDrop, isOver}, drop] = useDrop({
        accept: 'box',
        drop: (item) => {
            setBoxes(boxes.map((box) => box.id === item.id ?
                { ...box, num: num } : box))
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
            {boxes.map((box) => (box.num === num ?
                    <Box key={box.id} id={box.id} color={box.color}>
                        {box.text}
                    </Box> : null
            ))}
        </div>
    );
};

const Test = () => {
    const [boxes, setBoxes] = useState([
        {id: 1, num: 1, text: 'Box 1', color: 'lightblue'},
        {id: 2, num: 1, text: 'Box 2', color: 'lightcoral'},
        {id: 3, num: 1, text: 'Box 3', color: 'lightgoldenrodyellow'},
    ]);

    return (
        <DndProvider backend={HTML5Backend}>
            <div style={{backgroundColor: "gray", display: "flex", gap: "10px", padding: "10px"}}>
                <DropZone boxes={boxes} setBoxes={setBoxes} num={1}/>
                <DropZone boxes={boxes} setBoxes={setBoxes} num={2}/>
                <DropZone boxes={boxes} setBoxes={setBoxes} num={3}/>
            </div>
        </DndProvider>
    );
};

export default Test;
