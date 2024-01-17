import React from "react";
import Counter from "../SimpleCounter/Features/Counter/Counter"
import { Provider } from "react-redux";
import { store } from "../SimpleCounter/App/store"

export default function SimpleCounter() {

    return (
        <div className="simplecounter">
            <h1>Simple counter</h1>
            <Provider store={store}>
                <Counter />
            </Provider>
        </div>
    )
}