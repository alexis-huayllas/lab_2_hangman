return (
    <div className='flex-container'>
        {keyState.map(({ key, state }) => (
            <ItemKeyComponent
                key={key}
                mykey={key}
                state={state}
                handlerClick={handlerClick}
            />
        ))}
    </div>
);