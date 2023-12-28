import React, { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";

import { Link, LinkProps } from "./index";

export default {
    title: "Component/Link",
    component: Link,
} as Meta;

const Profile: Story<PropsWithChildren<LinkProps>> = (args) => (
    <Link {...args}/>
);

export const Index = Profile.bind({});
Index.args = {
        children:"hola",
        href:"#"
} as LinkProps
