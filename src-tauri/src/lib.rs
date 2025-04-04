#[tauri::command]
fn add(a: i32, b: i32) -> i32 {
    a + b
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![add])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

