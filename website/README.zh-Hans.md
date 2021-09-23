---
slug: /
---

# PT工具集

> 所有PT工具集合

[中文TG讨论群](https://t.me/awesome_pt_cn) | [编辑此页](https://github.com/sabersalv/awesome-pt/edit/main/README.md)

**注意中文版不是最新的版本, 请已英文版为主**

欢迎提交PR修改

说明

- ![chinese] 只有中文语言
- ![oss] 开源软件
- ![flood] Flood
- ![rutorrent] ruTorrent
- ![rtorrent] rTorrent
- ![transmission] Transmission
- ![qbittorrent] qBittorrent
- ![deluge] Deluge
- ![utorrent] µTorrent
- GUI: 图形界面
- TUI: 终端界面
- CLI: 命令行界面
- Daemon: 后台程序

## 目录

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

| 名称 |
|------|
| [Reddit](https://www.reddit.com/r/trackers) |
| [PT风向旗](https://t.me/Ptfxq) ![chinese] |
| [PT官方公告](https://t.me/Ptggb) ![chinese] |
| [PTHub](https://t.me/PT_hub) ![chinese] |

## Sites

| 名称 |
|------|
| [Gentoo Wiki](https://wiki.installgentoo.com/wiki/Private_trackers#What_are_the_best_private_trackers.3F) |
| [Private Tracker List](https://hdvinnie.github.io/Private-Trackers-Spreadsheet) |
| [PT Analytics](https://api.rhilip.info/ptanalytics.html) |
| [Tracker Status](https://trackerstatus.info) |
| [OpenTrackers](https://opentrackers.org/tracker-list) |

### Site Enhancement

| 名称 | 描述 |
|------|------------|
| [Douban Info](https://github.com/techmovie/DouBan-Info-for-PT) ![chinese] | Add douban information |
| [PTP Show Group Name](https://greasyfork.org/en/scripts/387484-ptp-show-group-name) | Add release group name for PTP |
| [PTP Bonus Point Optimization](https://www.dropbox.com/s/qhp2g8xestqkn2c/Bonus%20Point%20Optimization.user.js?dl=1) |
| [BKS Upload Game Helper](https://greasyfork.org/en/scripts/406869-brokenstones-upload-game-helper) |
| [WhuBBCode+](https://greasyfork.org/en/scripts/380518-whutbbcode) | Add BBCode toolbar |
| [EasyCompare](https://github.com/N3xusHD/EasyCompare) |

## BT

### BT Frontends

| 名称 | 平台 | BT客户端支持 | 功能 |
|------|----------|-----------|----------|
| [Flood](https://github.com/jesec/flood) |  Web | ![rtorrent] ![transmission] ![qbittorrent] ![deluge] | RSS |
| [Rutorrent](https://github.com/Novik/ruTorrent) |  Web | ![rtorrent] | RSS |
| [Transdroid](https://github.com/erickok/transdroid) | Android | ![rtorrent] ![transmission] ![qbittorrent] ![deluge] | |
| PT管理宝 ![chinese] | 微信小程序 | ![transmission] ![qbittorrent] |
| [随身PT](https://github.com/techmovie/trans-client) ![chinese] | 微信小程序 | ![rutorrent] ![transmission] ![qbittorrent] ![deluge] ![utorrent] |

### BT Clients

| 名称 | 界面 | 语言 |
|------|-----------|----------|
| [rTorrent](https://github.com/jesec/rtorrent) | Daemon/TUI | C++ |
| [Transmission](https://github.com/transmission/transmission) | Daemon/GUI/Web | C++ |
| [qBittorrent](https://github.com/qbittorrent/qBittorrent) | Daemon/GUI/Web | C++ |
| [Deluge](https://github.com/deluge-torrent/deluge) | Daemon/GUI/Web | Python |

### BT RSS

| 名称 |
|------|
| [Flexget](https://github.com/Flexget/Flexget) |
| [Show RSS](https://showrss.info) |
| [T RSS](https://github.com/capric98/t-rss) |
| [Fish RSS](https://github.com/qfishpear/fishrss_simple) |
| [Flexget NexusPHP](https://github.com/Juszoe/flexget-nexusphp) |
| [Promotion](https://github.com/Alvinnfly/promotion) |

### BT IRC

| 名称 | 描述 |
|------|-------------|
| [Autodl Irssi](https://autodl-community.github.io/autodl-irssi/) | Auto Download |
| [Irssi](https://github.com/irssi/irssi) | IRC Client, TUI |
| [Thelounge](https://github.com/thelounge/thelounge) | IRC Client, WEB |

### BT Misc

| 名称 |
|------|
| [IMDB Scout Mod](https://github.com/Purfview/IMDb-Scout-Mod) |
| [豆瓣资源下载大师](https://greasyfork.org/en/scripts/329484-%E8%B1%86%E7%93%A3%E8%B5%84%E6%BA%90%E4%B8%8B%E8%BD%BD%E5%A4%A7%E5%B8%88-1%E7%A7%92%E6%90%9E%E5%AE%9A%E8%B1%86%E7%93%A3%E7%94%B5%E5%BD%B1-%E9%9F%B3%E4%B9%90-%E5%9B%BE%E4%B9%A6%E4%B8%8B%E8%BD%BD) ![chinese] |

### Cross Seed Helpers

| 名称 | 界面 | BT客户端支持 |
|------|-----------|----------------------|
| [IYUU Plus](https://github.com/ledccn/IYUUPlus) | Web | ![transmission] ![qbittorrent] |
| [IYUU GUI](https://github.com/sabersalv/IYUU-GUI) | GUI | ![flood] ![transmission] ![qbittorrent] ![deluge] |
| [IYUU Auto Reseed](https://gitee.com/ledc/IYUUAutoReseed) | CLI |
| [tongyifan/Reseed](https://github.com/tongyifan/Reseed-backend) |
| [PT Plugin Plus](https://github.com/ronggang/PT-Plugin-Plus) |
| [Cross Seed AutoDL](https://github.com/BC44/Cross-Seed-AutoDL) | CLI |
| [mmgoodnow/cross-seed](https://github.com/mmgoodnow/cross-seed) | CLI |

### Add Torrent

| 名称 |
|------|
| [PT Plugin Plus](https://github.com/ronggang/PT-Plugin-Plus) |
| [Remote Torrent Adder](https://github.com/bogenpirat/remote-torrent-adder) |
| [Electorrent](https://github.com/tympanix/Electorrent) |
| [Torrent Control](https://github.com/Mika-/torrent-control) |

### Auto Remove

| 名称 | BT客户端支持 |
|------|----------------------|
| [jerrymakesjelly/autoremove-torrents](https://github.com/jerrymakesjelly/autoremove-torrents) | ![transmission] ![qbittorrent] ![utorrent] ![deluge] |
| [omaralvarez/deluge-autoremoveplus](https://github.com/omaralvarez/deluge-autoremoveplus) | ![deluge] |

### qBittorrent Tools

| 名称 | 界面 |
|------|-----------|
| [qbittorrent-cli](https://github.com/ludviglundgren/qbittorrent-cli) | CLI |
| [qbittools](https://gitlab.com/AlexKM/qbittools) | CLI |
| [qBittorrent Tracker Hound](https://github.com/JakeWharton/qbt-tracker-hound) | CLI |
| [qBt Migrate](https://github.com/jslay88/qbt_migrate) | CLI |

## Automation

| 名称 | 功能 |
|------|----------|
| [PT Plugin Plus](https://github.com/ronggang/PT-Plugin-Plus) | Aggregate Indexer, Account Stats, Add Torrent, Bulk Download, Cross Seed |
| [Jackett](https://github.com/Jackett/Jackett) | Aggregate Indexer |
| [Prowlarr](https://github.com/Prowlarr/Prowlarr) | Aggregate Indexer |
| [Cardigann](https://github.com/cardigann/cardigann) | Aggregate Indexer |
| [PT Sign-in](https://github.com/lhllhx/PT_signin) |

## Movie & TV

### Video Automation

| 名称 | 列表 | 说明 |
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

| 名称 |
|------|
| [Jellyfin](https://github.com/jellyfin/jellyfin) ![oss] |
| [Emby](https://emby.media) |
| [Plex](https://www.plex.tv) |
| [Synology Video Station](https://www.synology.com/en-global/dsm/feature/video_station) |

### Video Streaming

| 名称 |
|------|
| [Popcorn Time](https://github.com/popcorn-official/popcorn-desktop) |

### Video Player

| 名称 | 平台 |
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

| 名称 | 说明 |
|------|-------------|
| [Bazarr](https://github.com/morpheus65535/bazarr) | Automation, Like Sonarr
| [OpenSubtitles](https://www.opensubtitles.org) |
| [kitsunekko](https://kitsunekko.net) | Anime subtitles in English, Japanese, Chinese and Korean |
| [SubHD](https://subhd.tv) ![chinese] |
| [字幕库](https://zmk.pw) ![chinese] |
| [伪射手网](https://assrt.net) ![chinese] |
| [A4K](https://www.a4k.net) ![chinese] |

### Video Transcode

| 名称 | 界面 |
|------|----------|
| [HandBrake](https://github.com/HandBrake/HandBrake) | GUI |
| [Tdarr](https://github.com/HaveAGitGat/Tdarr) |

## Music

### Music Automation

| 名称 | 功能 |
|------|----------|
| [Lidarr](https://github.com/lidarr/lidarr) | like Sonarr |
| [Betanin](https://github.com/sentriz/betanin) |
| [Beets](https://github.com/beetbox/beets) | Manager, Metadata |
| [Headphones](https://github.com/rembo10/headphones) | Auto Download |

### Music Server

| 名称 |
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

| 名称 |
|------|
| [whatmp3](https://github.com/RecursiveForest/whatmp3) |

## EBook

### EBook Automation

| 名称 | 描述 |
|------|-------------|
| [Readarr](https://github.com/readarr/readarr) | like Sonarr |
| [LazyLibrarian](https://gitlab.com/LazyLibrarian/LazyLibrarian) |
| [Mylar3](https://github.com/mylar3/mylar3) | For Comic Book, Auto Download |

### EBook Manager

| 名称 |
|------|
| [Calibre](https://github.com/kovidgoyal/calibre) |

## Upload

### Upload Semi-Auto

| 名称 |
|------|
| [Easy Upload](https://github.com/techmovie/easy-upload) |
| [Auto Feed](https://github.com/tomorrow505/auto_feed_js) ![chinese] |
| [PT种子搬运助手](https://greasyfork.org/zh-CN/scripts/402942-pt%E7%A7%8D%E5%AD%90%E6%90%AC%E8%BF%90%E5%8A%A9%E6%89%8B) ![chinese] |

### Upload Bot

| 名称 | 描述 |
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
| [GazelleSync](https://github.com/soleil0-0/GazelleSync) | RED, OPS, NWCD, Dolphin |
| [RedCurry](https://redacted.ch/forums.php?action=viewthread&threadid=45310&postid=904390#post904390) | RED, OPS, NWCD, Dolphin (CLI) |

### Upload Helpers

| 名称 | 描述 |
|------|-------------|
| [PT Gen ![chinese]](https://github.com/Rhilip/pt-gen-cfworker) | Description Generator |
| [Image Host Helper](https://greasyfork.org/en/scripts/401743-image-host-helper) |
| [RED/OPS Upload Assistant](https://greasyfork.org/en/scripts/389583-red-ops-upload-assistant) |

### Scripts for Seedbox

| 名称 |
|------|
| [rtinst](https://github.com/arakasi72/rtinst) |
| [QuickBox Lite](https://github.com/amefs/quickbox-lite) |
| [Swizzin](https://github.com/swizzin/swizzin) |
| [Aniverse/inexistence](https://github.com/Aniverse/inexistence) |

### CLI Tools

| 名称 | 描述 |
|------|-------------|
| [transmission-cli](https://man.archlinux.org/man/transmission-create.1.en) |
| [mediainfo](https://github.com/MediaArea/MediaInfo) |
| [bdinfo](https://github.com/UniqProject/BDInfo) |
| [mktorrent](https://github.com/pobrn/mktorrent) | Create torrent file |
| [PyroCore](https://github.com/pyroscope/pyrocore) |
| [torf-cli](https://github.com/rndusr/torf-cli) |
| [anacrolix/torrent](https://github.com/anacrolix/torrent) |

### Homelab

| 名称 | 描述 |
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

| 名称 |
|------|
| [TMDB API](https://developers.themoviedb.org) |
| [OMDB API](http://www.omdbapi.com) |
| [IMDB API](https://developer.imdb.com) |
| [Douban API](https://github.com/zce/douban-api-docs/tree/f0847616a75e1dca5ee3e123166c5f2d9ee5acab) |

## Libraries

### Javascript

| 名称 |
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
