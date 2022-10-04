import React from 'react';

export const hoc = (Component, addData) => (props) => {

	return <Component addData={addData} {...props}/>

}


export const WrappedComponent = (props) => {

	return <div>{props.data + ' / ' + props.addData}</div>
}
