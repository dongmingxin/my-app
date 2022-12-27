import * as React from "react";
import { createContext, useContext, useState, useEffect } from "react";

export interface DataContextInterface {
	_id: string;
    title: string;
    content: string;
    image: string;
    data: Date;
    __v: number;
}

export interface DataContextProviderProps {
    children?: React.ReactNode;
}

export const DataContext = createContext<DataContextInterface>({
    _id: '',
    title: '',
    content: '',
    image: '',
    data: new Date,
    __v: 0, 
});

const { Provider } = DataContext;