import React, { useState } from 'react';
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

//styled components
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';

// custom hooks
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';

const Tetris = () => {
    

    return (
        <StyledTetrisWrapper>
            <StyledTetris>
            <Stage stage={createStage()} />
            <aside>
                <div>
                <Display text="Score" />
                <Display text="Rows" />
                <Display text="Level" />
                </div>
                <StartButton />
            </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}

export default Tetris;