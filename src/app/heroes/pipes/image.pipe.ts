import { Pipe, PipeTransform } from '@angular/core';
import { Heroes } from '../interfaces/heroes.interface';

@Pipe({
  name: 'image',
  // pure: false,
})
export class ImagePipe implements PipeTransform {

  transform(heroe: Heroes): string {

    if (!heroe.id && !heroe.alt_image) {
      return 'assets/no-image.png'
    } else if (heroe.alt_image) {
      return heroe.alt_image
    } else {
      return `assets/heroes/${heroe.id}.jpg`
    }

  }

}
