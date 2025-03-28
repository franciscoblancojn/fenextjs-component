import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { InputSelectCSC, InputSelectCSCProps } from "./index";
import { FenextjsValidator } from "fenextjs-validator";
import { CityProps, CountryProps, StateProps } from "fenextjs-interface";

export default {
    title: "Input/InputSelectCSC",
    component: InputSelectCSC,
} as Meta;

const Profile: StoryFn<InputSelectCSCProps> = (args) => (
    <InputSelectCSC {...args}>Test Children</InputSelectCSC>
);

export const Index = Profile.bind({});



const XellValidatorCountry = FenextjsValidator<CountryProps>()
    .isObject(
        {
            id: FenextjsValidator()
                .isNumber('País requerido')
                .isRequired('País requerido'),
        },
        'País requerido',
    )
    .isRequired('País requerido');

const XellValidatorState = FenextjsValidator<StateProps>()
    .isObject(
        {
            id: FenextjsValidator()
                .isNumber('Estado requerido')
                .isRequired('Estado requerido'),
        },
        'Estado requerido',
    )
    .isRequired('Estado requerido');

const XellValidatorCity = FenextjsValidator<CityProps>()
    .isObject(
        {
            id: FenextjsValidator()
                .isNumber('Ciudad requerida')
                .isRequired('Ciudad requerida'),
        },
        'Ciudad requerida',
    )
    .isRequired('Ciudad requerida');

const args: InputSelectCSCProps = {
    // defaultValue: {
    //     "city": {
    //         "id": 452468,
    //         "id_state": 1726,
    //         "text": "Bogotá",
    //         "id_country": 82,
    //         "nameAve": "BOGOTA(CUNDINAMARCA)"
    //     },
    //     "country": {"id":-1,"code":"","text":""},
    //     "state": {
    //         "id": 1726,
    //         "id_country": 82,
    //         "text": "Cundinamarca"
    //     }
    // },
    errorWithIsChange: false,
    converterInSearchWithMaxLenght:true,
    country: {
        validatorData: XellValidatorCountry,
        // forceShowOptionOnLoad:true
        label:"Country",
        // filterOptions:(d)=>{
        //     return d.sort((a)=>{
        //         if(a.text == "Colombia"){
        //             return -1
        //         }
        //         return 0
        //     })
        // }
    },
    state: {
        validatorData: XellValidatorState,
        label:"State"
    },
    city: {
        validatorData: XellValidatorCity,
        label:"City"
    },
    defaultValue:{

    "country": {
        "id": -1,
        "code": "",
        "text": ""
    },
    "state": {
        "id": -1,
        "id_country": -1,
        "text": ""
    },
    "city": {
        "id": -1,
        "id_country": -1,
        "id_state": -1,
        "text": ""
    },
    }
};

Index.args = args;
