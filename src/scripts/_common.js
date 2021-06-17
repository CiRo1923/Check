import URLs from '_URL.js';
import LazyLoad from 'vanilla-lazyload';
import {
  prjs, svgRequire, scrollTo, j$
} from '_factory.js';

let lazyLoadFun = new LazyLoad();

/* 一次載入使用到的 svg */
svgRequire(require.context('../assets/svg/', true, /\.svg$/));

export const common = {
  Lay: {
    app: '.lWrap'
  },
  VUE: {
    vm: null,
    data: {
      url: URLs
    },
    methods: {
      pageURL(channel, subNav) {
        const vm = this;
        let URL = null;

        vm.url.forEach(nav => {
          if (nav.name === channel) {
            if (!subNav) {
              URL = nav.href;
            } else {
              nav.subNavs.forEach(sNav => {
                if (sNav.name === subNav) {
                  URL = sNav.href;
                }
              });
            }
          }
        });

        return URL;
      },
      scrollTop(elem) {
        const { offsetTop, scrollTop, clientTop } = elem;
        const pos = {
          top: (offsetTop - scrollTop + clientTop),
          left: 0
        };

        scrollTo(pos);
      },
      scrollLeft(elem) {
        const { offsetLeft, scrollLeft, clientLeft } = elem;
        const pos = {
          top: 0,
          left: (offsetLeft - scrollLeft + clientLeft)
        };

        scrollTo(pos);
      }
    }
  }
};

export const acc = (obj) => {
  const $ctrlElem = j$(obj.ctrl);

  const accReset = (objVal) =>{
    for (let i = 0; i < j$(objVal.ctrl)[0].length; i += 1) {
      const $thisCtrl = j$(objVal.ctrl).eq(i);
      const $thisBd = j$(objVal.bd).eq(i);

      if ($thisCtrl.hasClass('act')) {
        $thisBd[0][0].style.maxHeight = `${$thisBd[0][0].children[0].offsetHeight}px`;
      } else {
        $thisBd[0][0].style.maxHeight = 0;
      }
    }
  };

  accReset(obj);

  prjs.$d.on('click', obj.ctrl, e => {
    const $elem = j$(e.$this);
    const $nextElem = $elem.next(obj.bd);
    const maxHeight = parseInt($nextElem[0][0].children[0].offsetHeight, 10);

    if ($elem.hasClass('act')) {
      $elem.removeClass('act');
      $nextElem[0][0].style.maxHeight = 0;
    } else {
      $ctrlElem.removeClass('act');
      accReset(obj);
      $elem.addClass('act');
      $nextElem[0][0].style.maxHeight = `${maxHeight}px`;
    }
  });
};

// export const assignComponents = (pageComponents) => {
//   return Object.assign(common.VUE.components, pageComponents);
// };

export const assignData = (pageData) => {
  return Object.assign(common.VUE.data, pageData);
};

export const assignMethods = (pageMethods) => {
  return Object.assign(common.VUE.methods, pageMethods);
};

prjs.$d.on('ready', () => {
  lazyLoadFun({
    elements_selector: '.lazy',
    use_native: true
  });
});
