import React from 'react'

const statusMessage = ({winner,current}) => {
    // const message =winner?`Our Winner is ${winner}`:`Next Player is ${current.isXNext?'X':'O'}`;
    const noMoveleft =current.board.every(el=>el!==null);
    return (
        <div className='status-message'>
           {winner &&
           <>
            Winner is {' '}
            <span className={winner==='X'?'text-green':'text-orange'}> {winner}</span>
           </>}
           {!winner && !noMoveleft &&(
           <>
           Next Player is <span className={current.isXNext?'text-green':'text-orange'}> {current.isXNext?'X':'O'}</span>
           </>
           ) 
           }
           {!winner && noMoveleft && (
           <>
           <span className='text-green'>X</span> and{' '} <span className='text-orange'>O</span> Tied
           </>
           )
           }
        </div>
    )
}

export default statusMessage
