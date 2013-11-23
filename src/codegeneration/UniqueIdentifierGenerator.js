// Copyright 2012 Traceur Authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

export class UniqueIdentifierGenerator {
  constructor() {
    this.identifierIndex = 0;
  }

  /**
   * @return {string}
   */
  generateUniqueIdentifier() {
    return `$__${this.identifierIndex++}`;
  }

  /**
   * Gets a unique identifier that is reused based on the name passed in.
   * @param {string} name
   * @return {string}
   */
  getUniqueIdentifier(name) {
    if (name[0] === '@')
      return `$___${name.slice(1)}`;
    return `$__${name}`;
  }
}