// able to edit an element with out braking the higharkey of the files.

// lets you edit a child element with out changing the parent element

//syntax
// ReactDOM.createPortal(chiled, DOM element)

{
    showModal ? (
        <div id="first-child">
            <div id="second-child">
                <div id="third-child">
                    <div id="fourth-child" style={{ color: 'yellow', fontSize: '2em' }}>
                        <Modal dismissModal={onDissmissModal} />
                    </div>
                </div>
            </div>
        </div>
    ) : null
}