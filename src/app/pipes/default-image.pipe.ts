import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(imageUrl: string, defaultUrl: string = "assets/images/default.jpg"): string {
    return imageUrl && imageUrl.trim() !== '' ? imageUrl : defaultUrl;
  }

}
