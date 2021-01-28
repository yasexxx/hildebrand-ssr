import { Injectable } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class SeoService {
    constructor(private meta: Meta, private title: Title){}
    metaObj!: MetaDefinition;
    
    changeTitle(title: string) {
        this.title.setTitle(title);
      }
    
    updateOgUrl(url: string) {
        this.meta.updateTag({ name: 'og:url', content: url })
      }
    
    updateDescriptionOnly(desc: string) {
        this.meta.updateTag({ name: 'description', content: desc });
    }

    updateMoreTags(keywordContent:string, descriptionContent:string, domainName:string, twitterTitle:string, twitterContent:string, twitterImageSrc:string, appUrl:string, siteName:string,  robotContent = 'index, follow') {
        this.meta.addTags([
            {name: 'keywords', content: keywordContent },
            { name: 'Description', content: descriptionContent },
            { name: 'robots', content: robotContent },
            { name: 'apple-mobile-web-app-capable', content: 'yes'},
            { name: 'apple-mobile-web-app-status-bar-style', content: 'translucent' },
            { property: 'og:url', content: appUrl },
            { property: 'og:type', content: 'website' },
            { property: 'og:site_name', content: siteName  },
            { name: 'twitter:card', content: 'card'},
            { name: 'twitter:domain', content: domainName },
            { name: 'twitter:title', property: 'og:title', itemprop: 'name', content: twitterTitle },
            { name: 'twitter:description', property: 'og:description', itemprop: 'description', content: twitterContent},
            { name: 'twitter:image:src', content: twitterImageSrc },
            { name: 'facebook:card', content: 'card'},
            { name: 'facebook:domain', content: domainName },
            { name: 'facebook:title', property: 'og:title', itemprop: 'name', content: twitterTitle },
            { name: 'facebook:description', property: 'og:description', itemprop: 'description', content: twitterContent},
            { name: 'facebook:image:src', content: twitterImageSrc },
        ]);
    }


    seoUpdatePage(router:Router, activatedRoute: ActivatedRoute){
      return router.events.pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => activatedRoute),
        map((route) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data)
       )
       .subscribe((event) => {
         console.log(event);
         this.changeTitle(event['title']);
         this.updateOgUrl(event['ogUrl']);
         //Updating Description tag dynamically with title
         this.updateDescriptionOnly(event['title'] + event['description'])
       }); 
    }
}