import urlJoin from 'url-join';

export function strings(language: string) {
  return <K extends keyof (typeof defaultStr)>(key: K) => {
    if(language.startsWith("en")) {
      return en[key];
    } else if(language.startsWith("ja")) {
      return ja[key];
    } else {
      return defaultStr[key];
    }
  };
}

const en = {
  language: 'Language',
  dark_theme: 'Dark Theme',
  pwa_update: 'Update',
  send: 'Send',
  get: 'Get',
  text_mode: 'Text mode',
  text_placeholder: 'Text',
  server_url: 'Server URL',
  secret_path: 'Secret path',
  secret_path_placeholder: 'e.g. mypath374',
  drop_a_file_here_or_browse: 'Drop a file here or <span class=\'filepond--label-action\'>Browse</span>',
  view: 'View',
  download: 'Download',
  error_file_not_selected: 'Error: File not selected',
  error_secret_path_not_specified: 'Error: Secret path not specified',
  upload: 'Upload',
  upload_url: 'Upload URL',
  data_uploader_xhr_onerror: (p: {serverUrl: string}) => {
    return `An error occurred. The server might be < 0.9.4. Please check ${urlJoin(p.serverUrl, "/version")}`;
  },
  data_uploader_xhr_upload_onerror: 'An error occurred while uploading',
  cancel: 'Cancel',
  view_in_viewer: 'View',
  download_url: 'Download URL',
  data_viewer_xhr_status_error: (p: {status: number, response: string}) => {
    return `Error (${p.status}): "${p.response}"`;
  },
  data_viewer_xhr_onerror: 'Download error',
  save: 'Save',
};
const defaultStr = en;

const ja: typeof defaultStr = {
  language: '言語 (Language)',
  dark_theme: 'ダークテーマ',
  pwa_update: 'Update',
  send: '送信',
  get: '受信',
  text_mode: 'テキスト',
  text_placeholder: 'テキスト',
  server_url: 'サーバー',
  secret_path: '転送パス',
  secret_path_placeholder: '例: mypath374、ひみつのパス',
  drop_a_file_here_or_browse: 'ファイルをドラッグするか<span class=\'filepond--label-action\'>開く</span>',
  view: '見る',
  download: 'ダウンロード',
  error_file_not_selected: 'エラー: ファイルが選択されていません',
  error_secret_path_not_specified: 'エラー: 転送パスが指定されていません',
  upload: 'アップロード',
  upload_url: 'アップロードURL',
  data_uploader_xhr_onerror: (p: {serverUrl: string}) => {
    return `エラーが発生しました。サーバーが0.9.4より低い可能性があります。 ${urlJoin(p.serverUrl, "/version")}でバージョンの確認できます。`;
  },
  data_uploader_xhr_upload_onerror: 'アップロード中にエラが発生しました',
  cancel: 'キャンセル',
  view_in_viewer: '表示',
  download_url: 'ダウンロードURL',
  data_viewer_xhr_status_error: (p: {status: number, response: string}) => {
    return `エラー (${p.status}): "${p.response}"`;
  },
  data_viewer_xhr_onerror: 'ダウンロードエラー',
  save: '保存',
} as const;
