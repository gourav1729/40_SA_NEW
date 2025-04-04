
import ChildComponent from './ChildComponent'
import React from 'react'

function ParentComponent() {
    const fruits = ["Apple", "Banana", "Cherry", "Apple", "Banana", "Cherry"];

    return <ChildComponent items={fruits} />;
  
}

export default ParentComponent
