/**
 * Copyright (C) 2024 Checkmk GmbH - License: GNU General Public License v2
 * This file is part of Checkmk (https://checkmk.com). It is subject to the terms and
 * conditions defined in the file COPYING, which is part of this source code package.
 */

/**
 * Stage data
 */
interface QuickSetupStageRequest {
  form_data: object
}

/**
 * Execute a stage action
 */
export interface QuickSetupStageActionRequest {
  stage_action_id: string
  stages: QuickSetupStageRequest[]
}

/**
 * Save the quick setup
 */
export interface QuickSetupFinalSaveRequest {
  button_id: string
  stages: QuickSetupStageRequest[]
}
