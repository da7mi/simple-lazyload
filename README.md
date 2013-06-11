# simple lazyload

機能を絞ったシンプルな画像遅延ロードプラグインです。


## Download & Install

[ jQuery ](http://jquery.com/) 動作確認Ver1.9済

    <script type="text/javascript" src="path/to/jquery.js"></script>
    <script type="text/javascript" src="path/to/jquery.simple-lzyload.js"></script>


## Example

HTML

    <img data-src='/path/to/origimagepath' src='/path/to/dummyimagepath' />

Javascript

    $('img').sLzyload();
    
## Options

    $('img').sLzyload({
        orgsrc: 'data-original' // オリジナルのデータを格納する要素名です。（prefixは[data-]必須）
    });
    
## Extra

任意のイベントでロードを行いたい場合はwindowのscrollイベントを発火してください。

    $(window).trigger('scroll');
    
## History

* Ver1.0 / 2013.06.10 / 公開
