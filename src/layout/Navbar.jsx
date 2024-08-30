import React from 'react'

export function Navbar() {
    return (
        <div>
            <nav classname="navbar navbar-expand-lg bg-body-tertiary">
                <div classname="container-fluid">
                    <a classname="navbar-brand" href="#">Navbar</a>
                    <button
                    classname="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                        
                    <span classname="navbar-toggler-icon"></span>
                    </button>
                    
                </div>
            </nav>
        </div>
    )
}
