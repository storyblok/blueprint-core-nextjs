import Page from '@/components/Page';
import Feature from '@/components/Feature';
import Grid from '@/components/Grid';
import Teaser from '@/components/Teaser';
import { createApiClient } from '@storyblok/api-client';
import { defineStoryblokBlocks } from '@storyblok/react';

export const apiClient = createApiClient({
	accessToken: process.env.STORYBLOK_DELIVERY_API_TOKEN,
	/** Set the correct region for your space. Learn more: https://www.storyblok.com/docs/packages/storyblok-js */
	region: process.env.STORYBLOK_REGION || 'eu',
	/** The following code is only required when creating a Storyblok space directly via the Blueprints feature. */
	baseURL: process.env.STORYBLOK_API_BASE_URL
		? `${new URL(process.env.STORYBLOK_API_BASE_URL).origin}/v2`
		: undefined,
});

export const { StoryblokBlock, StoryblokRichText } = defineStoryblokBlocks({
	components: { page: Page, teaser: Teaser, feature: Feature, grid: Grid },
});
