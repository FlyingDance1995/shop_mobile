const api = require('../api');
const utils = require('../utils');

const query = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('client-api/', '');
    // const { data } = await api.risks.query(token, url);
    const data = {
      count: 9,
      results: [
        {
          id: 1,
          name: 'SSH Protocol Versions Supported 1',
          severity: 'exploit',
          fixed_status: 'none'
        },
        {
          id: 2,
          name: 'SSH Protocol Versions Supported 2',
          severity: 'exploit',
          fixed_status: 'none'
        },
        {
          id: 3,
          name: 'SSH Protocol Versions Supported 3',
          severity: 'exploit',
          fixed_status: 'none'
        },
        {
          id: 4,
          name: 'SSH Protocol Versions Supported 4',
          severity: 'exploit',
          fixed_status: 'none'
        },
        {
          id: 5,
          name: 'SSH Protocol Versions Supported 5',
          severity: 'exploit',
          fixed_status: 'none'
        },
        {
          id: 6,
          name: 'SSH Protocol Versions Supported 6',
          severity: 'exploit',
          fixed_status: 'none'
        },
        {
          id: 7,
          name: 'SSH Protocol Versions Supported 7',
          severity: 'exploit',
          fixed_status: 'none'
        },
        {
          id: 8,
          name: 'SSH Protocol Versions Supported 8',
          severity: 'exploit',
          fixed_status: 'none'
        },
        {
          id: 9,
          name: 'SSH Protocol Versions Supported 9',
          severity: 'exploit',
          fixed_status: 'none'
        }
      ]
    };
    res.status(200).send(data);
  } catch (error) {
    const response = error.response;
    if(response && response.data && response.data.status_code) {
      res.status(response.data.status_code).send(response.data.error);
    } else {
      res.sendStatus(500);
    }
  }
};

const getData = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('client-api/', '');
    // const { data } = await api.risks.getData(token, url);
    const data = {
        "id": "1.3.6.1.4.1.25623.1.0.100259",
        "name": "SSH Protocol Versions Supported",
        "type": "vuln",
        "synopsis": "Identification of SSH protocol versions supported by the remote\n  SSH Server. Also reads the corresponding fingerprints from the service.\n\n  The following versions are tried: 1.33, 1.5, 1.99 and 2.0",
        "description": "",
        "impact": "",
        "affected": "",
        "vuldetected": "",
        "severity": "info",
        "cve": [
          "NOCVE"
        ],
        "bid": [
          "NOBID"
        ],
        "cvss2": 0.0,
        "cvss3": 0.0,
        "ref": [
          "NOXREF"
        ],
        "tags": [
          "NOCVE"
        ],
        "category": "network",
        "family": "Service detection",
        "solution": "",
        "solution_type": "none",
        "qod": 95,
        "qod_type": "remote_active",
        "creation_time": 1251227201,
        "modification_time": 1549958117,
        "is_fix_required": false,
        "additional_info": "False",
        "exploit_module": false,
        "notes": [
          {
            "id": 41,
            "risk": "1.3.6.1.4.1.25623.1.0.100259",
            "owner": "Tống Văn Toàn1",
            "target": 328,
            "task": 323,
            "object": "192.168.30.1",
            "content": "Lỗ hổng liên quan đến phiên bản SSL",
            "creation_time": 1563938707
          },
          {
            "id": 37,
            "risk": "1.3.6.1.4.1.25623.1.0.100259",
            "owner": "Tống Văn Toàn1",
            "target": 328,
            "task": 323,
            "object": "",
            "content": "aaaaaaaaaaa",
            "creation_time": 1563935220
          },
          {
            "id": 21,
            "risk": "1.3.6.1.4.1.25623.1.0.100259",
            "owner": "Tống Văn Toàn1",
            "target": 328,
            "task": 323,
            "object": "",
            "content": "ooooooooooooooo",
            "creation_time": 1563872201
          },
          {
            "id": 19,
            "risk": "1.3.6.1.4.1.25623.1.0.100259",
            "owner": "Tống Văn Toàn1",
            "target": 328,
            "task": 323,
            "object": "",
            "content": "ok mọi thứ đã ổn thỏa.",
            "creation_time": 1563869070
          },
          {
            "id": 18,
            "risk": "1.3.6.1.4.1.25623.1.0.100259",
            "owner": "Tống Văn Toàn1",
            "target": 328,
            "task": 323,
            "object": "",
            "content": "mọi thứ vẫn ổn",
            "creation_time": 1563865143
          },
          {
            "id": 16,
            "risk": "1.3.6.1.4.1.25623.1.0.100259",
            "owner": "Tống Văn Toàn1",
            "target": 328,
            "task": 323,
            "object": "",
            "content": "hu",
            "creation_time": 1563864359
          },
          {
            "id": 15,
            "risk": "1.3.6.1.4.1.25623.1.0.100259",
            "owner": "Tống Văn Toàn1",
            "target": 328,
            "task": 323,
            "object": "",
            "content": "lỗ hổng khổng lồ",
            "creation_time": 1563864101
          },
          {
            "id": 14,
            "risk": "1.3.6.1.4.1.25623.1.0.100259",
            "owner": "Tống Văn Toàn1",
            "target": 328,
            "task": 323,
            "object": "",
            "content": "this iss a test",
            "creation_time": 1563858023
          },
          {
            "id": 13,
            "risk": "1.3.6.1.4.1.25623.1.0.100259",
            "owner": "Tống Văn Toàn1",
            "target": 328,
            "task": 323,
            "object": "",
            "content": "ok",
            "creation_time": 1563857998
          },
          {
            "id": 12,
            "risk": "1.3.6.1.4.1.25623.1.0.100259",
            "owner": "Tống Văn Toàn1",
            "target": 328,
            "task": 323,
            "object": "",
            "content": "hihih",
            "creation_time": 1563857773
          },
          {
            "id": 7,
            "risk": "1.3.6.1.4.1.25623.1.0.100259",
            "owner": "Tống Văn Toàn1",
            "target": 328,
            "task": 323,
            "object": "",
            "content": "Nghiêm trọng cần được giải quyết gấp",
            "creation_time": 1563855176
          },
          {
            "id": 5,
            "risk": "1.3.6.1.4.1.25623.1.0.100259",
            "owner": "Tống Văn Toàn1",
            "target": 328,
            "task": 323,
            "object": "",
            "content": "Siêu lỗ hổng",
            "creation_time": 1563854966
          },
          {
            "id": 4,
            "risk": "1.3.6.1.4.1.25623.1.0.100259",
            "owner": "Tống Văn Toàn1",
            "target": 328,
            "task": 323,
            "object": "",
            "content": "Lỗ hổng to đùng",
            "creation_time": 1563854703
          },
          {
            "id": 3,
            "risk": "1.3.6.1.4.1.25623.1.0.100259",
            "owner": "Tống Văn Toàn1",
            "target": 328,
            "task": 323,
            "object": "192.168.30.1",
            "content": "Lỗ hổng liên quan đến phiên bản SSL",
            "creation_time": 1563850417
          },
          {
            "id": 2,
            "risk": "1.3.6.1.4.1.25623.1.0.100259",
            "owner": "Tống Văn Toàn1",
            "target": 328,
            "task": 323,
            "object": "192.168.30.1",
            "content": "Lỗ hổng liên quan đến phiên bản SSL",
            "creation_time": 1563524145
          }
        ],
        "fixed_status": "none",
        "list_objects": [
          2042
        ],
        "total_objects": 1,
        "total_objects_fixed": 0,
        "total_objects_ignored": 0,
        "total_objects_false_positive": 0,
        "total_objects_propound": 0,
        "list_data": [
          {
            "id": 2042,
            "folder": {
              "id": 223,
              "name": "SB"
            },
            "target": {
              "id": 328,
              "name": "192.168.30.0/24"
            },
            "task": 323,
            "object": "192.168.30.220",
            "port": "22/tcp",
            "output": "The remote SSH Server supports the following SSH Protocol Versions:\n2.0\n\nSSHv2 Fingerprint(s):\necdsa-sha2-nistp256: a4:ce:e1:17:97:82:17:e4:60:5d:f7:1a:e1:d5:33:37\nssh-ed25519: 1f:64:b0:33:da:83:d8:0c:d1:3a:a4:12:b6:7f:3d:5d\nssh-rsa: 80:6f:fa:5a:3f:f1:d6:f6:c2:ec:bf:55:0d:ba:c6:b5",
            "is_issue_loop": false,
            "fixed_status": "none",
            "recheck_task": null,
            "recheck_task_status": null,
            "creation_time": "2019-07-18T16:50:47.586426+07:00",
            "modification_time": "2019-07-18T16:50:47.586433+07:00"
          }
        ]
      };
    res.status(200).send(data);
  } catch (error) {
    const response = error.response;
    if(response && response.data && response.data.status_code) {
      res.status(response.data.status_code).send(response.data.error);
    } else {
      res.sendStatus(500);
    }
  }
};

const addNotes = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('client-api/', '');
    // const { data } = await api.folders.create(token,url,req.body);
    const data = req.body;
    res.status(200).send(data);
  } catch (error) {
    console.log("error: ", error);
    const response = error.response;
    if(response && response.data && response.data.status_code) {
      res.status(response.data.status_code).send(response.data.error);
    } else {
      res.sendStatus(500);
    }
  }
};

module.exports = {
  query,
  getData,
  addNotes
};
