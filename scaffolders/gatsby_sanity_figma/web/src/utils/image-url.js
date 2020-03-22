import imageUrlBuilder from '@sanity/image-url';
import config from '../../config';

const builder = imageUrlBuilder(config.sanity);

export function imageUrlFor(source) {
  return builder.image(source);
}
