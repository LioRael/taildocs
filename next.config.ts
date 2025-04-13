import { withContentCollections } from "@content-collections/next";

import type { NextConfig } from "next";

const config: NextConfig = {
	reactStrictMode: true,
};

export default withContentCollections(config);
