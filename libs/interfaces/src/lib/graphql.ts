
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface Alert {
    __typename?: 'Alert';
    level: string;
    value: number;
    id: string;
}

export interface Value {
    __typename?: 'Value';
    value: number;
}

export interface IQuery {
    __typename?: 'IQuery';
    values(): Value[] | Promise<Value[]>;
}

export interface ISubscription {
    __typename?: 'ISubscription';
    alert(): Alert | Promise<Alert>;
    value(): Value | Promise<Value>;
}
