const appConfig = {

  supportEmail: process.env.SUPPORT_EMAIL,
  hotline: process.env.HOTLINE,

  regexes: {
    ip: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
    ipContinuous: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)-(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
    ipSubnetmark: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\/(?:([1-9]|1[0-9]|2[0-9]|3[0-2]))$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    url: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
    port: /^()([1-9]|[1-5]?[0-9]{2,4}|6[1-4][0-9]{3}|65[1-4][0-9]{2}|655[1-2][0-9]|6553[1-5])$/
  },

  threatLevels: {
    'exploit': {
      vi: 'kiểm thử xâm nhập',
      en: 'exploit',
    },
    'critical': {
      vi: 'mức nghiêm trọng',
      en: 'critical',
    },
    'high': {
      vi: 'mức cao',
      en: 'high',
    },
    'medium': {
      vi: 'mức trung bình',
      en: 'medium',
    },
    'low': {
      vi: 'mức thấp',
      en: 'low',
    },
    'info': {
      vi: 'mức thông tin',
      en: 'info',
    }
  },
  speed: {
    'very_low': {
      vi: 'Rất chậm',
      en: 'Very low',
    },
    'low': {
      vi: 'Chậm',
      en: 'Low',
    },
    'medium': {
      vi: 'Trung bình',
      en: 'Medium',
    },
    'fast': {
      vi: 'Nhanh',
      en: 'Fast',
    },
    'very_fast': {
      vi: 'Rất nhanh',
      en: 'Very fast',
    },
  },
  hostOrders: {
    'sequential': {
      vi: 'Quét tuần tự',
      en: 'Sequential',
    },
    'random': {
      vi: 'Quét ngẫu nhiên',
      en: 'Random',
    },
    'reverse': {
      vi: 'Quét đảo ngược',
      en: 'Reverse',
    },
  },
  targetSchedulerType: {
    'onetime': {
      vi: 'Một lần',
      en: 'Onetime',
    },
    'daily': {
      vi: 'Hằng ngày',
      en: 'Daily',
    },
    'weekly': {
      vi: 'Hằng tuần',
      en: 'Weekly',
    },
    'monthly': {
      vi: 'Hằng tháng',
      en: 'Monthly',
    },
  },
  weekdays: {
    'sun': {
      en: 'Sunday',
      vi: 'Chủ nhật',
    },
    'mon': {
      en: 'Monday',
      vi: 'Thứ 2',
    },
    'tue': {
      en: 'Tuesday',
      vi: 'Thứ 3',
    },
    'wed': {
      en: 'Wednesday',
      vi: 'Thứ 4',
    },
    'thu': {
      en: 'Thursday',
      vi: 'Thứ 5',
    },
    'fri': {
      en: 'Friday',
      vi: 'Thứ 6',
    },
    'sat': {
      en: 'Saturday',
      vi: 'Thứ 7',
    }
  },
  scanCustomConfigs: {
    'standard': 'Standard Scan',
    'credentialed_patch_audit': 'Credentialed Patch Audit',
    'badlock_detection': 'Badlock Detection',
    'bash_shellshock_detection': 'Bash Shellshock Detection',
    'host_discovery': 'Host Discovery',
    'malware_scan': 'Malware Scan',
    'spectre_and_meltdown': 'Spectre & Meltdown',
    'drown_detection': 'DROWN Detection',
    'wannacry_ransomware': 'WannaCry Ransomware',
    'web_application_tests': 'Web Application Tests',
  },
  scanPorts: {
    'default': {
      name: 'Scan default',
      description: {
        vi: 'Quét 5000 cổng phổ biến',
        en: 'Scan 5000 popular ports',
      }
    },
    'all_tcp': {
      name: 'All TCP',
      description: {
        vi: 'Quét tất cả 65536 cổng',
        en: 'Scan all 65536 ports',
      }
    },
    'nmap_2000': {
      name: 'Nmap top 2000',
      description: {
        vi: 'Quét top 2000 cổng theo thống kê của NMAP',
        en: 'Scan top 2000 ports according to NMAP\'s statistics',
      }
    },
    'all_privileged_tcp': {
      name: 'All Privileged TCP',
      description: {
        vi: 'Quét hơn 1000 cổng TCP phổ biến',
        en: 'Scan over 1000 ports TCP popular',
      }
    },
    // all_privileged_tcp, nmap_2000, all_tcp
  },
  aliveTest: {
    'icmp_ping': 'Icmp Ping',
    'tcp_ack_ping': 'Tcp Ack Ping',
    'tcp_syn_ping': 'Tcp Syn Ping',
    'arp_ping': 'Arp Ping',
    'icmp_and_tcp_ack_ping': 'Icmp And Tcp Ack Ping',
    'icmp_and_arp_ping': 'Icmp And Arp Ping',
    'tcp_ack_and_arp_ping': 'Tcp Ack And Arp Ping',
    'icmp_and_tcp_ack_and_arp_ping': 'Icmp And Tcp Ack And Arp Ping',
  },
  taskTypes: {
    'normal': {
      vi: 'Giám sát chủ động',
      en: 'normal',
    },
    'demand': {
      vi: 'Kiểm tra theo yêu cầu',
      en: 'demand',
    },
  },
  taskStatus: {
    'scheduled': {
      vi: 'Đã tạo lịch',
      en: 'scheduled',
    },
    'requested': {
      vi: 'Đang đợi để thực hiện',
      en: 'requested',
    },
    'running': {
      vi: 'Đang chạy',
      en: 'running',
    },
    'stopping': {
      vi: 'Đang dừng',
      en: 'stopping',
    },
    'stopped': {
      vi: 'Đã dừng lại',
      en: 'stopped',
    },
    'error': {
      vi: 'Bị lỗi',
      en: 'error',
    },
    'done': {
      vi: 'Hoàn thành',
      en: 'done',
    },
    'unspecified': {
      vi: 'Không xác định',
      en: 'unspecified',
    },
    'restarting': {
      vi: 'Đang kích hoạt lại',
      en: 'restarting',
    },
  },
  accountType: {
    'admin': {
      vi: 'Quản trị',
      en: 'Admin'
    },
    'viewer': {
      vi: 'Người dùng',
      en: 'Viewer'
    },
  },
  newWeaknessType: {
    'vulnerability': {
      vi: 'Lỗ hổng tiềm ẩn',
      en: 'Vulnerability'
    },
    'malware': {
      vi: 'Phần mềm độc hại',
      en: 'Malware'
    },
    'webDeface': {
      vi: 'Tấn công thay đổi nội dung',
      en: 'Web deface'
    },
    'abnormal': {
      vi: 'Bất thường',
      en: 'Abnormal'
    },
    'blacklist': {
      vi: 'Danh sách đen',
      en: 'Black list'
    },
    'downDdos': {
      vi: 'Từ chối dịch vụ',
      en: 'Down/DDOS'
    },
  },

  fixStatus: {
    'fixed': {
      vi: 'Đã xử lý',
      en: 'Fixed'
    },
    'propound': {
      vi: 'Đề xuất khắc phục',
      en: 'Propound'
    },
    'false_positive': {
      vi: 'Phát hiện lỗi sai',
      en: 'False_positive'
    },
    'ignored': {
      vi: 'Bỏ qua',
      en: 'Ignored'
    },
  },

  screenSize: {
    sm: 1024,
    md: 1366,
    lg: 1920,
  },
  statusCodeMessage: {
       100: 'Continue',
       101: 'Switching Protocol',
       102: 'Processing (WebDAV)',
       103: 'Early Hints',
       200: 'OK',
       201: 'Created',
       202: 'Accepted',
       203: 'Non-Authoritative Information',
       204: 'No Content',
       205: 'Reset Content',
       206: 'Partial Content',
       207: 'Multi-Status (WebDAV)',
       208: 'Multi-Status (WebDAV)',
       226: 'IM Used (HTTP Delta encoding)',
       300: 'Multiple Choice',
       301: 'Moved Permanently',
       302: 'Found',
       303: 'See Other',
       304: 'Not Modified',
       305: 'Use Proxy',
       306: 'Unused',
       307: 'Temporary Redirect',
       308: 'Permanent Redirect',
       400: 'Bad Request',
       401: 'Unauthorized',
       402: 'Payment Required ',
       403: 'Forbidden',
       404: 'Not Found',
       405: 'Method Not Allowed',
       406: 'Not Acceptable',
       407: 'Proxy Authentication Required',
       408: 'Request Timeout',
       409: 'Conflict',
       410: 'Gone',
       411: 'Length Required',
       412: 'Precondition Failed',
       413: 'Payload Too Large',
       414: 'URI Too Long',
       415: 'Unsupported Media Type',
       416: 'Requested Range Not Satisfiable',
       417: 'Expectation Failed',
       418: "I'm a teapot",
       421: 'Misdirected Request',
       422: 'Unprocessable Entity (WebDAV)',
       423: 'Locked (WebDAV)',
       424: 'Failed Dependency (WebDAV)',
       425: 'Too Early',
       426: 'Upgrade Required',
       428: 'Precondition Required',
       429: 'Too Many Requests',
       431: 'Request Header Fields Too Large',
       451: 'Unavailable For Legal Reasons',
       500: 'Internal Server Error',
       501: 'Not Implemented',
       502: 'Bad Gateway',
       503: 'Service Unavailable',
       504: 'Gateway Timeout',
       505: 'HTTP Version Not Supported',
       506: 'Variant Also Negotiates',
       507: 'Insufficient Storage',
       508: 'Loop Detected (WebDAV)',
       510: 'Not Extended',
       511: 'Network Authentication Required',
  },
};

export default appConfig;
