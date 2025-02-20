import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Form, FormProps } from "./index";

export default {
    title: "Component/Form",
    component: Form,
} as Meta;

const Profile: StoryFn<FormProps> = (args) => (
    <Form {...args}>Test Children</Form>
);

export const Index = Profile.bind({});
Index.args = {};
