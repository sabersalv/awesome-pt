# Awesome PT

> A collection of awesome PT clients, tools and scripts.

[Join Telegram Discussion](https://t.me/awesome_pt) | [中文TG讨论群](https://t.me/awesome_pt_cn)

PRs are very welcome!

Note

- ![chinese] Chinese language only
- ![oss] Open Source Software
- ![flood] Flood
- ![rutorrent] ruTorrent
- ![rtorrent] rTorrent
- ![transmission] Transmission
- ![qbittorrent] qBittorrent
- ![deluge] Deluge
- ![utorrent] µTorrent
- GUI: Graphical User Interface
- TUI: Terminal User Interface
- CLI: Command-Line Interface
- Daemon: Runs as a background process

## Table of Contents

- [Community](#community)
- [Sites](#sites)
  - [Site Enhancement](#site-enhancement)
- [BT](#bt)
  - [BT Frontends](#bt-frontends)
  - [BT Clients](#bt-clients)
  - [BT RSS](#bt-rss)
  - [BT IRC](#bt-irc)
  - [BT Misc](#bt-misc)
  - [Cross Seed Helpers](#cross-seed-helpers)
  - [Add Torrent](#add-torrent)
  - [Auto Remove](#auto-remove)
  - [qBittorrent Tools](#qbittorrent-tools)
- [Automation](#automation)
- [Movie & TV](#movie--tv)
  - [Video Automation](#video-automation)
  - [Video Server](#video-server)
  - [Video Streaming](#video-streaming)
  - [Video Player](#video-player)
  - [Video Subtitle](#video-subtitle)
  - [Video Transcode](#video-transcode)
- [Music](#music)
  - [Music Automation](#music-automation)
  - [Music Server](#music-server)
  - [Music Transcode](#music-transcode)
- [EBook](#ebook)
  - [EBook Automation](#ebook-automation)
  - [EBook Manager](#ebook-manager)
- [Upload](#upload)
  - [Upload Semi-Auto](#upload-semi-auto)
  - [Upload Bot](#upload-bot)
  - [Upload Helpers](#upload-helpers)
- [Scripts For Seedbox](#scripts-for-seedbox)
- [CLI Tools](#cli-tools)
- [Homelab](#homelab)
- [Development](#development)
  - [Tracker Codebase](#tracker-codebase)
  - [API](#api)
  - [Libraries](#libraries)
    - [JavaScript](#javascript)

## Community

| Name |
|------|
| [Reddit](https://www.reddit.com/r/trackers) |
| [PT风向旗](https://t.me/Ptfxq) ![chinese] |
| [PT官方公告](https://t.me/Ptggb) ![chinese] |
| [PTHub](https://t.me/PT_hub) ![chinese] |

## Sites

| Name |
|------|
| [Gentoo Wiki](https://wiki.installgentoo.com/wiki/Private_trackers#What_are_the_best_private_trackers.3F) |
| [Private Tracker List](https://hdvinnie.github.io/Private-Trackers-Spreadsheet) |
| [PT Analytics](https://api.rhilip.info/ptanalytics.html) |
| [Tracker Status](https://trackerstatus.info) |
| [OpenTrackers](https://opentrackers.org/tracker-list) |

### Site Enhancement

| Name | Description|
|------|------------|
| [Douban Info](https://github.com/techmovie/DouBan-Info-for-PT) ![chinese] | Add douban information |
| [PTP Show Group Name](https://greasyfork.org/en/scripts/387484-ptp-show-group-name) | Add release group name for PTP |
| [PTP Bonus Point Optimization](https://www.dropbox.com/s/qhp2g8xestqkn2c/Bonus%20Point%20Optimization.user.js?dl=1) |
| [BKS Upload Game Helper](https://greasyfork.org/en/scripts/406869-brokenstones-upload-game-helper) |
| [WhuBBCode+](https://greasyfork.org/en/scripts/380518-whutbbcode) | Add BBCode toolbar |
| [EasyCompare](https://github.com/N3xusHD/EasyCompare) |

## BT

### BT Frontends

| Name | Platform | Supported BT Clients| Features |
|------|----------|-----------|----------|
| [Flood](https://github.com/jesec/flood) |  Web | ![rtorrent] ![transmission] ![qbittorrent] ![deluge] | RSS |
| [Rutorrent](https://github.com/Novik/ruTorrent) |  Web | ![rtorrent] | RSS |
| [Transdroid](https://github.com/erickok/transdroid) | Android | ![rtorrent] ![transmission] ![qbittorrent] ![deluge] | |
| PT管理宝 ![chinese] | 微信小程序 | ![transmission] ![qbittorrent] |
| [随身PT](https://github.com/techmovie/trans-client) ![chinese] | 微信小程序 | ![rutorrent] ![transmission] ![qbittorrent] ![deluge] ![utorrent] |

### BT Clients

| Name | Interface | Language |
|------|-----------|----------|
| [rTorrent](https://github.com/jesec/rtorrent) | Daemon/TUI | C++ |
| [Transmission](https://github.com/transmission/transmission) | Daemon/GUI/Web | C++ |
| [qBittorrent](https://github.com/qbittorrent/qBittorrent) | Daemon/GUI/Web | C++ |
| [Deluge](https://github.com/deluge-torrent/deluge) | Daemon/GUI/Web | Python |

### BT RSS

| Name |
|------|
| [Flexget](https://github.com/Flexget/Flexget) |
| [Show RSS](https://showrss.info) |
| [T RSS](https://github.com/capric98/t-rss) |
| [Fish RSS](https://github.com/qfishpear/fishrss_simple) |
| [Flexget NexusPHP](https://github.com/Juszoe/flexget-nexusphp) |
| [Promotion](https://github.com/Alvinnfly/promotion) |

### BT IRC

| Name | Description |
|------|-------------|
| [Autodl Irssi](https://autodl-community.github.io/autodl-irssi/) | Auto Download |
| [Irssi](https://github.com/irssi/irssi) | IRC Client, TUI |

### BT Misc

| Name |
|------|
| [IMDB Scout Mod](https://github.com/Purfview/IMDb-Scout-Mod) |
| [豆瓣资源下载大师](https://greasyfork.org/en/scripts/329484-%E8%B1%86%E7%93%A3%E8%B5%84%E6%BA%90%E4%B8%8B%E8%BD%BD%E5%A4%A7%E5%B8%88-1%E7%A7%92%E6%90%9E%E5%AE%9A%E8%B1%86%E7%93%A3%E7%94%B5%E5%BD%B1-%E9%9F%B3%E4%B9%90-%E5%9B%BE%E4%B9%A6%E4%B8%8B%E8%BD%BD) ![chinese] |

### Cross Seed Helpers

| Name | Interface | Supported BT Clients |
|------|-----------|----------------------|
| [IYUU Plus](https://github.com/ledccn/IYUUPlus) | Web | ![transmission] ![qbittorrent] |
| [IYUU GUI](https://github.com/sabersalv/IYUU-GUI) | GUI | ![flood] ![transmission] ![qbittorrent] ![deluge] |
| [IYUU Auto Reseed](https://gitee.com/ledc/IYUUAutoReseed) | CLI |
| [Tongyifan Reseed](https://github.com/tongyifan/Reseed-backend) |
| [PT Plugin Plus](https://github.com/ronggang/PT-Plugin-Plus) |
| [Cross Seed AutoDL](https://github.com/BC44/Cross-Seed-AutoDL) | CLI |
| [mmgoodnow/cross-seed](https://github.com/mmgoodnow/cross-seed) | CLI |

### Add Torrent

| Name |
|------|
| [PT Plugin Plus](https://github.com/ronggang/PT-Plugin-Plus) |
| [Remote Torrent Adder](https://github.com/bogenpirat/remote-torrent-adder) |
| [Electorrent](https://github.com/tympanix/Electorrent) |
| [Torrent Control](https://github.com/Mika-/torrent-control) |

### Auto Remove

| Name | Supported BT Clients |
|------|----------------------|
| [jerrymakesjelly/autoremove-torrents](https://github.com/jerrymakesjelly/autoremove-torrents) | ![transmission] ![qbittorrent] ![utorrent] |
| [omaralvarez/deluge-autoremoveplus](https://github.com/omaralvarez/deluge-autoremoveplus) | ![deluge] |

### qBittorrent Tools

| Name | Interface |
|------|-----------|
| [qbittorrent-cli](https://github.com/ludviglundgren/qbittorrent-cli) | CLI |
| [qbittools](https://gitlab.com/AlexKM/qbittools) | CLI |
| [qBittorrent Tracker Hound](https://github.com/JakeWharton/qbt-tracker-hound) | CLI |
| [qBt Migrate](https://github.com/jslay88/qbt_migrate) | CLI |

## Automation

| Name | Features |
|------|----------|
| [PT Plugin Plus](https://github.com/ronggang/PT-Plugin-Plus) | Aggregate Indexer, Account Stats, Add Torrent, Bulk Download, Cross Seed |
| [Jackett](https://github.com/Jackett/Jackett) | Aggregate Indexer |
| [Prowlarr](https://github.com/Prowlarr/Prowlarr) | Aggregate Indexer |
| [Cardigann](https://github.com/cardigann/cardigann) | Aggregate Indexer |
| [PT Sign-in](https://github.com/lhllhx/PT_signin) |

## Movie & TV

### Video Automation

| Name | For | Descrioption |
|------|-----|--------------|
| [Radarr](https://github.com/Radarr/Radarr) | Movie | like Sonarr |
| [Sonarr](https://github.com/Sonarr/Sonarr) | TV | Auto Download, Rename, Delete, Trump |
| [Nefarious](https://github.com/lardbit/nefarious) | Movie & TV | like Sonarr |
| [Bobarr](https://github.com/iam4x/bobarr) | Movie & TV | like Sonarr |
| [Medusa](https://pymedusa.com) | TV |
| [tinyMediaManager](https://www.tinymediamanager.org) | Movie & TV | Metadata |
| [Filebot](https://www.filebot.net) | Movie & TV | Rename |
| [SickRage](https://www.sickrage.ca) | TV |
| [Couchpotato](https://couchpota.to) | Movie |
| [DuckieTV](https://github.com/SchizoDuckie/DuckieTV) | TV |

### Video Server

| Name |
|------|
| [Jellyfin](https://github.com/jellyfin/jellyfin) ![oss] |
| [Emby](https://emby.media) |
| [Plex](https://www.plex.tv) |
| [Synology Video Station](https://www.synology.com/en-global/dsm/feature/video_station) |

### Video Streaming

| Name |
|------|
| [Popcorn Time](https://github.com/popcorn-official/popcorn-desktop) |

### Video Player

| Name | Platform |
|------|----------|
| [IINA](https://github.com/iina/iina) ![oss] | macOS |
| [VLC](https://www.videolan.org/) ![oss] | macOS/Linux/Windows |
| [PotPlayer](https://potplayer.daum.net) | Windows |
| [MPC BE](https://sourceforge.net/projects/mpcbe) ![oss] | Windows |
| [Infuse](https://firecore.com/infuse) | iOS/macOS |
| [MX Player](https://www.mxplayer.in/download-apps) | iOS/Android |
| [MrMc](https://github.com/MrMC/mrmc) ![oss] | iOS |
| [nPlayer](https://nplayer.com/) | Android |
| [Kodi](https://github.com/xbmc) ![oss] |

### Video Subtitle

| Name | Description |
|------|-------------|
| [Bazarr](https://github.com/morpheus65535/bazarr) | Automation, Like Sonarr }
| [OpenSubtitles](https://www.opensubtitles.org) |
| [kitsunekko](https://kitsunekko.net) | Anime subtitles in English, Japanese, Chinese and Korean |
| [SubHD](https://subhd.tv) ![chinese] |
| [字幕库](https://zmk.pw) ![chinese] |
| [伪射手网](https://assrt.net) ![chinese] |
| [A4K](https://www.a4k.net) ![chinese] |

### Video Transcode

| Name | Interface|
|------|----------|
| [HandBrake](https://github.com/HandBrake/HandBrake) | GUI |
| [Tdarr](https://github.com/HaveAGitGat/Tdarr) |

## Music

### Music Automation

| Name | Features |
|------|----------|
| [Lidarr](https://github.com/lidarr/lidarr) | like Sonarr |
| [Betanin](https://github.com/sentriz/betanin) |
| [Beets](https://github.com/beetbox/beets) | Manager, Metadata |
| [Headphones](https://github.com/rembo10/headphones) | Auto Download |

### Music Server

| Name |
|------|
| [Koel](https://github.com/koel/koel) |
| [Polaris](https://github.com/agersant/polaris) |
| [Groove Basin](https://github.com/andrewrk/groovebasin) |
| [Airsonic Advanced](https://github.com/airsonic-advanced/airsonic-advanced) |
| [mStream](https://github.com/IrosTheBeggar/mStream) |
| [Black Candy](https://github.com/aidewoode/black_candy) |
| [Music Player Deamon](https://www.musicpd.org) |
| [Compactd](https://github.com/compactd/compactd) |

### Music Transcode

| Name |
|------|
| [whatmp3](https://github.com/RecursiveForest/whatmp3) |

## EBook

### EBook Automation

| Name | Description |
|------|-------------|
| [Readarr](https://github.com/readarr/readarr) | like Sonarr |
| [LazyLibrarian](https://gitlab.com/LazyLibrarian/LazyLibrarian) |
| [Mylar3](https://github.com/mylar3/mylar3) | For Comic Book, Auto Download |

### EBook Manager

| Name |
|------|
| [Calibre](https://github.com/kovidgoyal/calibre) |

## Upload

### Upload Semi-Auto

| Name |
|------|
| [Easy Upload](https://github.com/techmovie/easy-upload) |
| [Auto Feed](https://github.com/tomorrow505/auto_feed_js) ![chinese] |
| [PT种子搬运助手](https://greasyfork.org/zh-CN/scripts/402942-pt%E7%A7%8D%E5%AD%90%E6%90%AC%E8%BF%90%E5%8A%A9%E6%89%8B) ![chinese] |

### Upload Bot

| Name | Description |
|------|-------------|
| [PT Autoseed](https://github.com/Rhilip/Pt-Autoseed) |
| [SJTU Autoseed](https://github.com/Rhilip/SJTU-Autoseed) |
| [Rachpt AutoSeed](https://github.com/rachpt/AutoSeed) |
| [Alexandria](https://github.com/pthcode/alexandria) | Ebook |
| [TJUPT Anime Autoseed](https://github.com/tongyifan/TJUPT-Anime-Autoseed) | TJUP, Anime |
| [GGN2PTer](https://github.com/scatking/ggn2pter) | GGN -> PTer |
| [JPS2SM](https://git.sugoimusic.me/Sugoimusic/jps2sm) | JPS -> SM |
| [PTP Uploader](https://github.com/bobbintb/PtpUploader) | PTP |
| [AB Fetcher](https://github.com/anniemaybytes/fetcher) | AB |

### Upload Helpers

| Name | Description |
|------|-------------|
| [PT Gen ![chinese]](https://github.com/Rhilip/pt-gen-cfworker) | Description Generator |
| [Image Host Helper](https://greasyfork.org/en/scripts/401743-image-host-helper) |
| [RED/OPS Upload Assistant](https://greasyfork.org/en/scripts/389583-red-ops-upload-assistant) |

### Scripts for Seedbox

| Name |
|------|
| [rtinst](https://github.com/arakasi72/rtinst) |
| [QuickBox Lite](https://github.com/amefs/quickbox-lite) |
| [Swizzin](https://github.com/swizzin/swizzin) |
| [Aniverse/inexistence](https://github.com/Aniverse/inexistence) |

### CLI Tools

| Name | Description |
|------|-------------|
| [transmission-cli](https://man.archlinux.org/man/transmission-create.1.en) |
| [mediainfo](https://github.com/MediaArea/MediaInfo) |
| [bdinfo](https://github.com/UniqProject/BDInfo) |
| [mktorrent](https://github.com/pobrn/mktorrent) | Create torrent file |
| [PyroCore](https://github.com/pyroscope/pyrocore) |
| [torf-cli](https://github.com/rndusr/torf-cli) |
| [anacrolix/torrent](https://github.com/anacrolix/torrent) |

### Homelab

| Name | Description |
|------|-------------|
| [Proxmox VE](https://pve.proxmox.com/wiki/Main_Page) | Virtualization |
| [Docker](https://www.docker.com/) | Virtualization |
| [Treafik](https://traefik.io/traefik) | Application proxy |
| [Let's Encypt](https://letsencrypt.org) | Free SSL certification |
| [Organizr](https://github.com/causefx/Organizr) | Services organizer |

# Development

- [Torrent file specification](http://www.bittorrent.org/beps/bep_0003.html)

## Tracker Codebase

- [Torrent-Tracker-Platforms](https://github.com/HDVinnie/Torrent-Tracker-Platforms)

## API

| Name |
|------|
| [TMDB API](https://developers.themoviedb.org) |
| [OMDB API](http://www.omdbapi.com) |
| [IMDB API](https://developer.imdb.com) |
| [Douban API](https://github.com/zce/douban-api-docs/tree/f0847616a75e1dca5ee3e123166c5f2d9ee5acab) |

## Libraries

### Javascript

| Name |
|------|
| [parse-torrent](https://github.com/webtorrent/parse-torrent) |
| [magnet-uri](https://github.com/webtorrent/magnet-uri) |
| [create-torrent](https://github.com/webtorrent/create-torrent) |
| [parse-torrent-title](https://github.com/clement-escolano/parse-torrent-title) |

[chinese]: ./assets/CN.svg 'Chinese language only'
[oss]: ./assets/oss.svg 'Open Source Software'
[flood]: ./assets/flood.svg 'Flood'
[rutorrent]: ./assets/rutorrent.svg 'ruTorrent'
[rtorrent]: ./assets/rtorrent.svg 'rTorrent'
[transmission]: ./assets/transmission.svg 'Transmission'
[qbittorrent]: ./assets/qbittorrent.svg 'qBittorrent'
[deluge]: ./assets/deluge.svg 'Deluge'
[utorrent]: ./assets/utorrent.svg 'µTorrent'
